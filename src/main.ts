import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { CORS } from './constants';
import { DatabaseConfig } from './database/db.datasource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  app.use(morgan('dev'));

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const configService = app.get(ConfigService);

  const port: number = configService.get('PORT');
  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  const configSwagger = new DocumentBuilder()
    .setTitle('App SGFE - API')
    .setDescription(
      'Aplicación SGFE - Sistema de Gestión y Planificación de Ferias de Emprendedores',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('docs', app, document);

  const configDb = DatabaseConfig;
  await app.listen(port);

  

  console.log(
    `* Base de datos ${configDb.database} de tipo: ${
      configDb.type
    }, corriendo en el puerto: ${configService.get('DB_Port')}`,
  );

  console.log('* Aplicación SGFE Iniciada en el Puerto:', port);

  console.log('* Documentación Swagger en:', `http://localhost:${port}/docs`);
}
bootstrap();

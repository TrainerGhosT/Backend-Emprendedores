import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';
import { CORS } from './constants';
import { DatabaseConfig } from './database/db.datasource';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  const port = configService.get('PORT');
  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  const configSwagger = new DocumentBuilder()
    .setTitle('App SGFE - API')
    .setDescription(
      'Aplicacion SGFE - Sistema de Gestion y Planificación de Ferias de E',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('docs ', app, document);

  const configDb = DatabaseConfig;
  await app.listen(port);

  console.log(
    `* Base de datos ${configDb.database} de tipo: ${
      configDb.type
    }, corriendo en el puerto: ${configService.get('DB_Port')}`,
  );

  console.log('* Aplicación SGFE Iniciada en el Puerto:', port);
}
bootstrap();

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasModule } from './app/areas/areas.module';
import { AuthModule } from './app/auth/auth.module';
import { EmprendedoresModule } from './app/emprendedores/emprendedores.module';
import { FeriasModule } from './app/ferias/ferias.module';
import { ParticipantesModule } from './app/participantes/participantes.module';
import { DatabaseConfig } from './database/db.datasource';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DatabaseConfig }),
    EmprendedoresModule,
    AreasModule,
    AuthModule,
    FeriasModule,
    ParticipantesModule
  ],
  controllers: [],
  providers: [],
  
})
export class AppModule {}

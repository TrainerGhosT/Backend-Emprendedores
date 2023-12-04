import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ferias } from './core/entities/feria.entity';
import { AguaControllers } from './detalles/condiciones/controllers/agua.controller';
import { CableControllers } from './detalles/condiciones/controllers/cable.controllers';
import { InternetControllers } from './detalles/condiciones/controllers/internet.controller';
import { LuzControllers } from './detalles/condiciones/controllers/luz.controller';
import { Agua } from './detalles/condiciones/entities/agua.entity';
import { Cable } from './detalles/condiciones/entities/cable.entity';
import { Internet } from './detalles/condiciones/entities/internet.entity';
import { Luz } from './detalles/condiciones/entities/luz.entity';
import { AguaService } from './detalles/condiciones/services/agua.service';
import { CableService } from './detalles/condiciones/services/cable.service';
import { InternetService } from './detalles/condiciones/services/internet.service';
import { LuzService } from './detalles/condiciones/services/luz.service';
import { DetalleControllers } from './detalles/core/controllers/detalle.controller';
import { Detalles } from './detalles/core/entities/detalle.entity';
import { DetalleService } from './detalles/core/services/detalle.service';
import { Temas } from './temas/entities/tema.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Ferias,
      Detalles,
      Temas,
      Agua,
      Luz,
      Internet,
      Cable,
    ]),
  ],
  providers: [DetalleService,AguaService, LuzService, InternetService, CableService],
  controllers: [DetalleControllers, AguaControllers, LuzControllers, InternetControllers, CableControllers],
  exports: [DetalleService, AguaService, LuzService, InternetService, CableService,TypeOrmModule],
})
export class FeriasModule {}

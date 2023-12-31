import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeriasController } from './core/controllers/feria.controller';
import { Ferias } from './core/entities/feria.entity';
import { FeriaService } from './core/services/feria.service';
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
import { TemaControllers } from './temas/controllers/tema.controller';
import { Temas } from './temas/entities/tema.entity';
import { TemaService } from './temas/services/tema.service';

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
  providers: [FeriaService, TemaService, DetalleService,AguaService, LuzService, InternetService, CableService],
  controllers: [FeriasController, TemaControllers,DetalleControllers, AguaControllers, LuzControllers, InternetControllers, CableControllers],
  exports: [FeriaService, TemaService, DetalleService, AguaService, LuzService, InternetService, CableService,TypeOrmModule],
})
export class FeriasModule {}

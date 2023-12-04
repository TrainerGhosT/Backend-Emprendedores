import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ferias } from './core/entities/feria.entity';
import { Agua } from './detalles/condiciones/entities/agua.entity';
import { Cable } from './detalles/condiciones/entities/cable.entity';
import { Internet } from './detalles/condiciones/entities/internet.entity';
import { Luz } from './detalles/condiciones/entities/luz.entity';
import { Detalles } from './detalles/core/entities/detalle.entity';
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
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class FeriasModule {}

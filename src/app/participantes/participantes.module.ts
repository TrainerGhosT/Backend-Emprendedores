import { TypeOrmModule } from '@nestjs/typeorm';
import { Global, Module } from '@nestjs/common';

import { Participantes } from './entities/participante.entity';
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Participantes,
    ]),
  ],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class ParticipantesModule {}

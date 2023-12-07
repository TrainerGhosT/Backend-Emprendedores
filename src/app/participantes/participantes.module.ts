import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipanteControllers } from './controllers/participante.controller';
import { Participantes } from './entities/participante.entity';
import { ParticipanteService } from './services/participante.service';
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Participantes,
    ]),
  ],
  providers: [ParticipanteService],
  controllers: [ParticipanteControllers],
  exports: [ParticipanteService, TypeOrmModule],
})
export class ParticipantesModule {}

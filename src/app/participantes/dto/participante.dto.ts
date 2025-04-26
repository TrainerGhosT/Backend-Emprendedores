import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class ParticipanteDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Emprendedor: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Feria: number;
}

export class ParticipanteFeriaDTO { 

  @ApiProperty()
  Id_Participante: number;

  @ApiProperty()
  Fecha_Inscripcion: Date;

  @ApiProperty()
  Id_Feria: number;

  @ApiProperty()
  Titulo: string;

  @ApiProperty()
  Descripcion: string;

  @ApiProperty()
  FechaPublicacion: Date;

  @ApiProperty()
  Area: string;
}

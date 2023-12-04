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

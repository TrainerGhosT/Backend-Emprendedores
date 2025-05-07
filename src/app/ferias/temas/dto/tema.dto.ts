import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Ferias } from './../../core/entities/feria.entity';

export class temaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  Titulo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  Descripcion?: string;

  @ApiProperty()
  @IsNotEmpty()
  HoraInicio: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Feria: Ferias;
}

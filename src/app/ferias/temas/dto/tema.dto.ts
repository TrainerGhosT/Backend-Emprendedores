import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
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
  @IsDate()
  HoraInicio: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  HoraFin: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Feria: Ferias;
}

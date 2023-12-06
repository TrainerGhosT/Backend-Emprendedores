
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Areas } from '../../../areas/entities/area.entity';
import { Detalles } from '../../detalles/core/entities/detalle.entity';

export class FeriaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  Titulo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  Descripcion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  FechaInicio: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  FechaFin: Date;

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
  Area: Areas;
  
  
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Detalle: Detalles;
  

}

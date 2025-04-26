import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Areas } from '../../../areas/entities/area.entity';


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
  Descripcion_Corta: string;

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
  @IsDate()
  @IsOptional()
  FechaFin: Date;

  @ApiProperty()
  @IsNotEmpty()
  
  HoraInicio: Date;

  @ApiProperty()
  
  HoraFin: Date;

  @ApiProperty()
  @IsString()
  Imagen: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Area: Areas;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  Costo: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  Lugar: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  Ubicacion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Agua: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Luz: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Internet: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Cable: number;
}

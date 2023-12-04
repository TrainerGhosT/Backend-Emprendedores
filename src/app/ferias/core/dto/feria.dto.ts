import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, MinLength } from 'class-validator';

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
}

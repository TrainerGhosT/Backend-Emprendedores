import { ApiProperty } from '@nestjs/swagger';
import {
    IsInt,
    IsNotEmpty,
    IsPositive,
    IsString,
    MinLength,
} from 'class-validator';

export class AreaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
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

import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MinLength,
} from 'class-validator';

export class EmprendedorDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  @MinLength(6)
  Cedula: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  Nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  Apellidos: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @IsEmail()
  Correo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  Contraseña: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  Telefono: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  Direccion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  FechaNacimiento: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Rol: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Area: number;
}

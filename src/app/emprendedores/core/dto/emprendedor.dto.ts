import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength
} from 'class-validator';
import { Areas } from 'src/app/areas/entities/area.entity';
import { Roles } from '../../roles/entities/rol.entity';

export class EmprendedorDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
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
  Rol: Roles;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Area: Areas;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AuthBody } from '../types/auth.type';

export class AuthDTO implements AuthBody {
  @ApiProperty()
  @IsNotEmpty()
  Correo: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Contraseña: string;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AguaDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  Descripcion: string;
}

export class LuzDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  Descripcion: string;
}
export class InternetDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  Descripcion: string;
}

export class CableDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  Descripcion: string;
}

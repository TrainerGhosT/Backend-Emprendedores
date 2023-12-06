import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength
} from 'class-validator';
import { Agua } from '../../condiciones/entities/agua.entity';
import { Cable } from '../../condiciones/entities/cable.entity';
import { Internet } from '../../condiciones/entities/internet.entity';
import { Luz } from '../../condiciones/entities/luz.entity';

export class DetalleDTO {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  
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
  Agua: Agua;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Luz: Luz;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Internet: Internet;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Cable: Cable;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class RolDTO { 
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    Descripcion: string;


}
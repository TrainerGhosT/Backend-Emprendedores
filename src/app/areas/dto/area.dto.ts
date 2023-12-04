import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class AreaDTO { 
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    Descripcion: string;


}
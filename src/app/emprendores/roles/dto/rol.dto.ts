import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class RolDTO { 
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    Descripcion: string;


}
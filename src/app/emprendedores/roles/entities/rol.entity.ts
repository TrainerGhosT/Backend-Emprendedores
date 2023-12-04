import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Emprendedores } from "../../core/entities/emprendedor.entity";
import { IRoles } from "../types/Rol.type";

@Entity('roles')
export class Roles implements IRoles{

    @ApiProperty()
    @PrimaryGeneratedColumn({ name: 'Id_Rol', type: 'int' })
    Id_Rol: number;

    @ApiProperty()
    @Column({ name: 'Descripcion', type: 'varchar', length: 40 , unique: true , nullable: false })
    Descripcion: string;

    @ApiProperty()
    @OneToMany(() => Emprendedores, (emprendedor) => emprendedor.Rol)
    Emprendedor: Emprendedores[]
}
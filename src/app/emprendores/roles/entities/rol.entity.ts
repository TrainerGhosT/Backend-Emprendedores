import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IRoles } from "../types/Rol.type";
import { Emprendedores } from "../../core/entities/emprendedor.entity";

@Entity('roles')
export class Roles implements IRoles{

    @PrimaryGeneratedColumn({ name: 'Id_Rol', type: 'int' })
    Id_Rol: number;

    @Column({ name: 'descripcion', type: 'varchar', length: 40 , nullable: false })
    Descripcion: string;

    @OneToMany(() => Emprendedores, (emprendedor) => emprendedor.Rol)
    Emprendedor: Emprendedores[]
}
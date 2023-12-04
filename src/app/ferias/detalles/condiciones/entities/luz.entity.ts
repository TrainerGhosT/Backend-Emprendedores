import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Detalles } from "../../core/entities/detalle.entity";
import { ILuz } from "../types/Condicion.type";
@Entity('condicion_luz')
export class Luz implements ILuz { 
    @PrimaryGeneratedColumn({name: 'Id_CondicionLuz', type: 'int'})
    Id_Agua: number;

    @Column({ name: 'Descripcion', type: 'varchar', length: 60 })
    Descripcion: string;

    @OneToMany(() => Detalles, (detalle) => detalle.Luz)
    Detalle: Detalles[];
}


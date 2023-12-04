import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Detalles } from "../../core/entities/detalle.entity";
import { IAgua } from "../types/Condicion.type";
@Entity('condicion_agua')
export class Agua implements IAgua { 
    @PrimaryGeneratedColumn({name: 'Id_CondicionAgua', type: 'int'})
    Id_Agua: number;

    @Column({ name: 'Descripcion', type: 'varchar', length: 60 })
    Descripcion: string;

    @OneToMany(() => Detalles, (detalle) => detalle.Agua)
    Detalle: Detalles[];
}

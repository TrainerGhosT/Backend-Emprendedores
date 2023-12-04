import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Detalles } from "../../core/entities/detalle.entity";
import { ICable } from "../types/Condicion.type";
@Entity('condicion_cable')
export class Cable implements ICable {
    @PrimaryGeneratedColumn({ name: 'Id_CondicionCable', type: 'int' })
    Id_Agua: number;

    @Column({ name: 'Descripcion', type: 'varchar', length: 60 })
    Descripcion: string;

    @OneToMany(() => Detalles, (detalle) => detalle.Cable)
    Detalle: Detalles[];
}
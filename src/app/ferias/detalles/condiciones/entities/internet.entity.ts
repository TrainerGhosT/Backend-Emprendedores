import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Detalles } from "../../core/entities/detalle.entity";
import { IInternet } from "../types/Condicion.type";
@Entity('condicion_internet')
export class Internet implements IInternet { 
    @PrimaryGeneratedColumn({name: 'Id_CondicionInternet', type: 'int'})
    Id_Agua: number;

    @Column({ name: 'Descripcion', type: 'varchar', length: 60 })
    Descripcion: string;

    @OneToMany(() => Detalles, (detalle) => detalle.Internet)
    Detalle: Detalles[];
}

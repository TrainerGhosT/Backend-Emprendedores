import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agua } from '../../condiciones/entities/agua.entity';
import { Cable } from '../../condiciones/entities/cable.entity';
import { Internet } from '../../condiciones/entities/internet.entity';
import { Luz } from '../../condiciones/entities/luz.entity';
import { IDetalle } from "../types/Detalle.type";
import { Ferias } from './../../../core/entities/feria.entity';

@Entity('detalle_ferias')
export class Detalles implements IDetalle { 

    @PrimaryGeneratedColumn({name: 'Id_DetalleFeria', type: 'int'})
    Id_Detalle: number; 

    @Column({ name: 'Costo', type: 'decimal', precision: 8 , scale: 2, nullable: false })
    Costo: number;

    @Column({ name: 'Lugar', type: 'varchar', length: 50 , nullable: false})
    Lugar: string;

    @Column({ name: 'Ubicacion', type: 'varchar', length: 150 , nullable: false})
    Ubicacion: string;

    // Condiciones y foreign keys 
    @ManyToOne(() => Agua, (agua) => agua.Detalle)
    @JoinColumn({name: 'idCondicionAgua'})
    Agua: Agua;

    @ManyToOne(() => Luz, (luz) => luz.Detalle)
    @JoinColumn({name: 'idCondicionLuz'})
    Luz: Luz; 

    @ManyToOne(() => Internet, (internet) => internet.Detalle)
    @JoinColumn({name: 'idCondicionInternet'})
    Internet: Internet;

    @ManyToOne(() => Cable, (cable) => cable.Detalle)
    @JoinColumn({name: 'idCondicionCable'})
    Cable: Cable;

    // Relaciones de Array(One To Many)
    @OneToMany(() => Ferias, (feria) => feria.Detalle)
    Feria: Ferias[];

}
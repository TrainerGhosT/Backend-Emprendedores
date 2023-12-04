import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ferias } from "../../core/entities/feria.entity";
import { ITema } from '../types/Tema.type';
@Entity('contenido_ferias')
export class Temas implements ITema { 

    @PrimaryGeneratedColumn({name: 'Id_Tema' , type: 'int'})
    Id_Tema: number; 

    @Column({ name: 'Titulo' , type: 'varchar', length: 60,  nullable: false})
    Titulo: string;

    @Column({ name: 'Descripcion' , type: 'varchar', length: 150,  nullable: false})
    Descripcion: string;
    
    @Column({ name: 'HoraInicio' , type: 'time', nullable: false})
    HoraInicio: Date;

    @Column({ name: 'HoraFin' , type: 'time', nullable: false})
    HoraFin: Date;

    @ManyToOne(() => Ferias, (feria) => feria.Tema)
    @JoinColumn({ name: 'idFeria'})
    Feria: Ferias
}
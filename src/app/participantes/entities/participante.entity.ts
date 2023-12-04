import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Emprendedores } from '../../emprendores/core/entities/emprendedor.entity';
import { Ferias } from '../../ferias/core/entities/feria.entity';
import { IParticipante } from '../types/Participante.type';
@Entity('participantes')
export class Participantes implements IParticipante{ 
    @PrimaryGeneratedColumn({ name: 'Id_Participante', type: 'int'})
    Id_Participante: number;
    
    @Column({ name: 'Fecha_Inscripcion', type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP'})
    Fecha_Inscripcion: Date

    @ManyToOne(() => Emprendedores, (emprendedor) => emprendedor.Participante)
    @JoinColumn({ name: 'idEmprendedor'})
    Emprendedor: Emprendedores;

    @ManyToOne(() => Ferias, (feria) => feria.Participante)
    @JoinColumn({ name: 'idFeria'})
    Feria: Ferias;

}
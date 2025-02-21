import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Areas } from '../../../areas/entities/area.entity';
import { Participantes } from '../../../participantes/entities/participante.entity';

import { Temas } from '../../temas/entities/tema.entity';
import { IFeria } from '../types/Feria.type';
import { Detalles } from '../../detalles/core/entities/detalle.entity';

@Entity('ferias')
export class Ferias implements IFeria {
  @PrimaryGeneratedColumn({ name: 'Id_Feria', type: 'int' })
  Id_Feria: number;

  @Column({ name: 'Titulo', type: 'varchar', length: 60, nullable: false })
  Titulo: string;

  @Column({
    name: 'Descripcion',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  Descripcion: string;

  @Column({ name: 'Fecha_Inicio', type: 'date', nullable: false })
  FechaInicio: Date;

  @Column({ name: 'Fecha_Fin', type: 'date', nullable: false })
  FechaFin: Date;

  @Column({ name: 'Hora_Inicio', type: 'time', nullable: false })
  HoraInicio: Date;

  @Column({ name: 'Hora_Fin', type: 'time', nullable: false })
  HoraFin: Date;

  @Column({
    name: 'Fecha_Publicacion',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  FechaPublicacion: Date;

  @ManyToOne(() => Areas, (area) => area.Feria)
  @JoinColumn({ name: 'idArea' })
  Area: Areas;

  @OneToOne(() => Detalles, (detalle) => detalle.Feria)
  Detalle: Detalles;

  @OneToMany(() => Temas, (tema) => tema.Feria)
  Tema: Temas[];

  @OneToMany(() => Participantes, (participante) => participante.Feria)
  Participante: Participantes[];
}

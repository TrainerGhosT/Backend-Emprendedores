import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Areas } from '../../../areas/entities/area.entity';
import { Participantes } from '../../../participantes/entities/participante.entity';
import { Detalles } from '../../detalles/core/entities/detalle.entity';
import { Temas } from '../../temas/entities/tema.entity';
import { IFeria } from '../types/Feria.type';

@Entity('ferias')
export class Ferias implements IFeria {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'Id_Feria', type: 'int' })
  Id_Feria: number;

  @ApiProperty()
  @Column({ name: 'Titulo', type: 'varchar', length: 60, nullable: false })
  Titulo: string;

  @ApiProperty()
  @Column({
    name: 'Descripcion',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  Descripcion: string;

  @ApiProperty()
  @Column({ name: 'Fecha_Inicio', type: 'date', nullable: false })
  FechaInicio: Date;

  @ApiProperty()
  @Column({ name: 'Fecha_Fin', type: 'date', nullable: false })
    FechaFin: Date;
    
  @ApiProperty()
  @Column({ name: 'Hora_Inicio', type: 'time', nullable: false })
  HoraInicio: Date;

  @ApiProperty()
  @Column({ name: 'Hora_Fin', type: 'time', nullable: false })
  HoraFin: Date;

  @ApiProperty()
  @Column({
    name: 'Fecha_Publicacion',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  FechaPublicacion: Date;

  @ApiProperty()
  @ManyToOne(() => Areas, (area) => area.Feria)
  @JoinColumn({ name: 'idArea' })
  Area: Areas;

  @ApiProperty()
  @ManyToOne(() => Detalles, (detalle) => detalle.Feria)
  @JoinColumn({ name: 'idDetalleFeria' })
  Detalle: Detalles;

  @ApiProperty()
  @OneToMany(() => Temas, (tema) => tema.Feria)
  Tema: Temas[];

  @ApiProperty()
  @OneToMany(() => Participantes, (participante) => participante.Feria)
  Participante: Participantes[];
}

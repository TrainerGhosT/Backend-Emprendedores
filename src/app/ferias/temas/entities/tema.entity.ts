import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Ferias } from '../../core/entities/feria.entity';
import { ITema } from '../types/Tema.type';
@Entity('contenido_ferias')
export class Temas implements ITema {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'Id_Tema', type: 'int' })
  Id_Tema: number;

  @ApiProperty()
  @Column({ name: 'Titulo', type: 'varchar', length: 60, nullable: false })
  Titulo: string;

  @ApiProperty()
  @Column({
    name: 'Descripcion',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  Descripcion: string;

  @ApiProperty()
  @Column({ name: 'HoraInicio', type: 'time', nullable: false })
  HoraInicio: Date;

  @ApiProperty()
  @ManyToOne(() => Ferias, (feria) => feria.Tema)
  @JoinColumn({ name: 'idFeria' })
  Feria: Ferias;
}

import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Detalles } from '../../core/entities/detalle.entity';
import { IAgua } from '../types/Condicion.type';
@Entity('condicion_agua')
export class Agua implements IAgua {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'Id_CondicionAgua', type: 'int' })
  Id_Agua: number;

  @ApiProperty()
  @Column({ name: 'Descripcion', type: 'varchar', unique: true, length: 60 })
  Descripcion: string;

  @ApiProperty()
  @OneToMany(() => Detalles, (detalle) => detalle.Agua)
  Detalle: Detalles[];
}

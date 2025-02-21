import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Detalles } from '../../core/entities/detalle.entity';
import { ICable } from '../types/Condicion.type';
@Entity('condicion_cable')
export class Cable implements ICable {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'Id_CondicionCable', type: 'int' })
  Id_Cable: number;

  @ApiProperty()
  @Column({ name: 'Descripcion', type: 'varchar', unique: true, length: 60 })
  Descripcion: string;

  @ApiProperty()
  @OneToMany(() => Detalles, (detalle) => detalle.Cable)
  Detalle: Detalles[];
}

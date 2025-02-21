import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Detalles } from '../../core/entities/detalle.entity';
import { ILuz } from '../types/Condicion.type';
@Entity('condicion_luz')
export class Luz implements ILuz {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'Id_CondicionLuz', type: 'int' })
  Id_Luz: number;

  @ApiProperty()
  @Column({ name: 'Descripcion', type: 'varchar', unique: true, length: 60 })
  Descripcion: string;

  @ApiProperty()
  @OneToMany(() => Detalles, (detalle) => detalle.Luz)
  Detalle: Detalles[];
}

import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Detalles } from '../../core/entities/detalle.entity';
import { IInternet } from '../types/Condicion.type';
@Entity('condicion_internet')
export class Internet implements IInternet {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'Id_CondicionInternet', type: 'int' })
  Id_Agua: number;

  @ApiProperty()
  @Column({ name: 'Descripcion', type: 'varchar', unique: true, length: 60 })
  Descripcion: string;

  @ApiProperty()
  @OneToMany(() => Detalles, (detalle) => detalle.Internet)
  Detalle: Detalles[];
}


import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Emprendedores } from '../../emprendedores/core/entities/emprendedor.entity';
import { Ferias } from '../../ferias/core/entities/feria.entity';
import { IArea } from '../types/Area.type';

@Entity('areas')
export class Areas implements IArea {
  
  @PrimaryGeneratedColumn({ name: 'Id_Area', type: 'int' })
  Id_Area: number;

  
  @Column({
    name: 'descripcion',
    type: 'varchar',
    length: 40,
    unique: true,
    nullable: false,
  })
  Descripcion: string;

  // Relación Emprendedor con las Areas
  
  @OneToMany(() => Emprendedores, (emprendedor) => emprendedor.Area)
  Emprendedor: Emprendedores[];

  
  @OneToMany(() => Ferias, (feria) => feria.Area)
  Feria: Ferias[];
}

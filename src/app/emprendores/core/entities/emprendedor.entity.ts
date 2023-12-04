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
import { Roles } from '../../roles/entities/rol.entity';
import { IEmprendedor } from '../types/Emprendedor.type';

@Entity('emprendedores')
export class Emprendedores implements IEmprendedor {
  // LLave Primaria
  @PrimaryGeneratedColumn({ name: 'Id_Emprendedor', type: 'int' })
  Id_Emprendedor: number;

  // Campos de la Tabla
  @Column({
    name: 'Cedula',
    type: 'varchar',
    length: 40,
    unique: true,
    nullable: false,
  })
  Cedula: string;

  @Column({
    name: 'Nombre_Completo',
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  Nombre: string;

  @Column({ name: 'Apellidos', type: 'varchar', length: 60, nullable: false })
  Apellidos: string;

  @Column({
    name: 'Correo',
    type: 'varchar',
    length: 80,
    unique: true,
    nullable: false,
  })
  Correo: string;

  @Column({ name: 'Contraseña', type: 'varchar', length: 200, nullable: false })
  Contraseña: string;

  @Column({ name: 'Telefono', type: 'varchar', length: 20, nullable: false })
  Telefono: string;

  @Column({ name: 'Direccion', type: 'varchar', length: 60, nullable: false })
  Direccion: string;

  @Column({ name: 'Fecha_Nacimiento', type: 'date', nullable: false })
  FechaNacimiento: Date;

  // LLave Foraneas
  @ManyToOne(() => Roles, (rol) => rol.Emprendedor)
  @JoinColumn({ name: 'idRol' })
  Rol: Roles;

  @ManyToOne(() => Areas, (area) => area.Emprendedor)
  @JoinColumn({ name: 'idArea' })
  Area: Areas;

  @OneToMany(() => Participantes, (participante) => participante.Emprendedor)
  Participante: Participantes[];
}

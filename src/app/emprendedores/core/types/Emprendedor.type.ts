import { Areas } from '../../../areas/entities/area.entity';
import { Roles } from '../../roles/entities/rol.entity';
export interface IEmprendedor { 
        Cedula: string;
        Nombre: string;
        Apellidos: string;
        Correo: string;
        Contraseña: string;
        Telefono: string;
        Direccion: string;
        FechaNacimiento: Date;
        Rol: Roles;
        Area: Areas | number
}
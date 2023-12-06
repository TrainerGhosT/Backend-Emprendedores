import { Emprendedores } from './../../emprendedores/core/entities/emprendedor.entity';
import { Roles } from './../../emprendedores/roles/entities/rol.entity';


export interface PayloadToken {
  sub:  string;
  role: Roles;
}

export interface AuthBody {
  Correo: string;
  Contraseña: string;
}

export interface AuthResponse {
  accessToken: string;
  emprendedor: Emprendedores;
}

export interface AuthTokenResult {
  role: string;
  sub:  string;
  iat:  number;
  exp:  number;
}

export interface IUseToken {
  role: string;
  sub:  string;
  isExpired: boolean
}
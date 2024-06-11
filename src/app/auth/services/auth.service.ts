import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { EmprendedorService } from 'src/app/emprendedores/core/services/emprendedor.service';
import { AuthResponse, PayloadToken } from '../types/auth.type';
import { Emprendedores } from './../../emprendedores/core/entities/emprendedor.entity';

@Injectable()
export class AuthService {
  constructor(private readonly emprendedorService: EmprendedorService) {}
  public async validarEmprendedor(
    emprendedor: string,
    contraseña: string,
  ): Promise<Emprendedores | null> {
    const userByUsername = await this.emprendedorService.findBy({
      key: 'Cedula',
      value: emprendedor,
    });
    const userByEmail = await this.emprendedorService.findBy({
      key: 'Correo',
      value: emprendedor,
    });

    if (userByUsername) {
      const match = await bcrypt.compare(contraseña, userByUsername.Contraseña);
      if (match) return userByUsername;
    }

    if (userByEmail) {
      const match = await bcrypt.compare(contraseña, userByEmail.Contraseña);
      if (match) return userByEmail;
    }

    return null;
  }

  public signJWT({
    payload,
    secret,
    expires,
  }: {
    payload: jwt.JwtPayload;
    secret: string;
    expires: number | string;
  }): string {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }

   public async generateJWT(emprendedor: Emprendedores): Promise<AuthResponse> {
    const getUser = await this.emprendedorService.findUserById(emprendedor.Id_Emprendedor);

    const payload: PayloadToken = {
      sub: getUser.Id_Emprendedor.toString(),
      role: getUser.Rol
    };

    console.log("Payload return:", payload);
    console.log("Info getUser:", getUser);

    return {
      accessToken: this.signJWT({
        payload,
        secret: process.env.JWT_SECRET,
        expires: '1h',
      }),
      emprendedor,
    };
  }
}

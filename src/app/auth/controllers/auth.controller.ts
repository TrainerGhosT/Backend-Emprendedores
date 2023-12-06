import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDTO } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() { Correo, Contraseña }: AuthDTO) {
    const emprendedorValidate = await this.authService.validarEmprendedor(
      Correo,
      Contraseña,
    );

    if (!emprendedorValidate) {
      throw new UnauthorizedException('La Información No Es Válida');
    }

    const jwt = await this.authService.generateJWT(emprendedorValidate);

    return jwt;
  }
}

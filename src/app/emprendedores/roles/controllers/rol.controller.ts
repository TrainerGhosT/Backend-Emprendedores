import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolDTO } from '../dto/rol.dto';
import { RolService } from './../services/rol.service';

@ApiTags('Roles')
@Controller('roles')
export class RolControllers {
  constructor(private readonly rolService: RolService) {}

  @Post('agregar-rol')
  public async CrearRol(@Body() body: RolDTO) {
    return await this.rolService.AgregarRol(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @ApiResponse({
    status: 201,
    description: 'Busqueda Exitosa',
  })
  @Get('listar-roles')
  public async ListarRoles() {
    return await this.rolService.ObtenerRoles();
  }
}

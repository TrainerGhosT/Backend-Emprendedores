import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmprendedorDTO } from '../dto/emprendedor.dto';
import { EmprendedorService } from './../services/emprendedor.service';

@ApiTags('Emprendedores')
@Controller('emprendedores')
export class EmprendedorControllers {
  constructor(private readonly emprendedorService: EmprendedorService) {}

  @Post('agregar-emprendedor')
  public async CrearEmprendedor(@Body() body: EmprendedorDTO) {
    return await this.emprendedorService.AgregarEmprendedor(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @Get('listar-emprendedores')
  public async ListarEmprendedores() {
    return await this.emprendedorService.ObtenerEmprendedores();
  }
}

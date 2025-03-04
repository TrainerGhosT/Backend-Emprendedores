import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


import { FeriaService } from '../services/feria.service';
import { FeriaDTO } from '../dto/feria.dto';

@ApiTags('Ferias')
@Controller('ferias')
export class FeriasController {
  constructor(private readonly feriaService: FeriaService) { }

  @ApiResponse({
    status: 201,
    description: 'Registro Guardado Exitosamente',
  })
  @Post('agregar-feria')
  public async CrearFeria(@Body() body: FeriaDTO) {
        
    return await this.feriaService.AgregarFeria(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @Get('listar-ferias')
  public async ListarFerias() {
    return await this.feriaService.ObtenerFerias();
  }

  @Get(':id')
  public async ListarFeria(@Param('id',) id: number) {
    return await this.feriaService.ObtenerFeria(id);
  }
}

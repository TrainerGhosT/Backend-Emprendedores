import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DetalleDTO } from '../dto/detalle.dto';
import { DetalleService } from '../services/detalle.service';


@ApiTags('Detalle Ferias')
@Controller('detalles')
export class DetalleControllers {
    constructor(private readonly detalleService: DetalleService) { }

    @Post('agregar-detalle')
    public async CrearDetalle(@Body() body: DetalleDTO) {
    return await this.detalleService.AgregarDetalle(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No Se Encontraron Resultados',
  })
  @Get('listar-detalles')
  public async ListarDetalleFerias() {
    return await this.detalleService.ObtenerDetalles();
  }
}

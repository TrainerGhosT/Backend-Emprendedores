import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CableDTO } from '../dto/condicion.dto';
import { CableService } from '../services/cable.service';

@ApiTags('Condicion Cable')
@Controller('condicion-cable')
export class CableControllers {
  constructor(private readonly cableService: CableService) {}

  @Post('agregar')
  public async CrearCondicionCable(@Body() body: CableDTO) {
    return await this.cableService.AgregarCable(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados ',
  })
  @Get('listar')
  public async ListarCondicionLuz() {
    return await this.cableService.ObtenerCable();
  }
}

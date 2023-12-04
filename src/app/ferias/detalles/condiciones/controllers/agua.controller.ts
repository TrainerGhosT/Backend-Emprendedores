import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { AguaDTO } from "../dto/condicion.dto";
import { AguaService } from "../services/agua.service";



@ApiTags('Condicion Agua')
@Controller('condicion-agua')
export class AguaControllers {
  constructor(private readonly aguaService: AguaService) {}

  @Post('agregar')
  public async CrearCondicionAgua(@Body() body: AguaDTO) {
    return await this.aguaService.AgregarAgua(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados ',
  })
  @Get('listar')
  public async ListarCondicionAgua() {
    return await this.aguaService.ObtenerAgua();
  }
}
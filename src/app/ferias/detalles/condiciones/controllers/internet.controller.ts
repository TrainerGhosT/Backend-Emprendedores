import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { InternetDTO } from "../dto/condicion.dto";
import { InternetService } from "../services/internet.service";



@ApiTags('Condicion Internet')
@Controller('condicion-internet')
export class InternetControllers {
  constructor(private readonly intenetService: InternetService) { }

  @Post('agregar')
  public async CrearCondicionInternet(@Body() body: InternetDTO) {
    return await this.intenetService.AgregarInternet(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados ',
  })
  @Get('listar')
  public async ListarCondicionInternet() {
    return await this.intenetService.ObtenerInternet();
  }
}
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { LuzDTO } from "../dto/condicion.dto";
import { LuzService } from "../services/luz.service";



@ApiTags('Condicion Luz')
@Controller('condicion-luz')
export class LuzControllers {
  constructor(private readonly luzService: LuzService) {}

  @Post('agregar')
  public async CrearCondicionLuz(@Body() body: LuzDTO) {
    return await this.luzService.AgregarLuz(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados ',
  })
  @Get('listar')
  public async ListarCondicionLuz() {
    return await this.luzService.ObtenerLuz();
  }
}
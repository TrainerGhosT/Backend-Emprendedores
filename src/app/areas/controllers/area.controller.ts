import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AreaDTO } from "../dto/area.dto";
import { AreaService } from '../services/area.service';

@ApiTags('Areas')
@Controller('areas')
export class AreaControllers {
  constructor(private readonly areaService: AreaService) {}

  @Post('agregar-area')
  public async CrearEmprendedor(@Body() body: AreaDTO) {
    return await this.areaService.AgregarArea(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @Get('listar-areas')
  public async ListarEmprendedores() {
    return await this.areaService.ObtenerAreas();
  }
}

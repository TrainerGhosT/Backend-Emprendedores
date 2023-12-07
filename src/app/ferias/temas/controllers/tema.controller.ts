import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { temaDTO } from '../dto/tema.dto';
import { TemaService } from '../services/tema.service';


@ApiTags('Temas')
@Controller('temas')
export class TemaControllers {
  constructor(private readonly temaService: TemaService) {}

  @Post('agregar-tema')
  public async CrearTema(@Body() body: temaDTO) {
    return await this.temaService.AgregarTema(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @Get('listar-temas')
  public async ListarTemas() {
    return await this.temaService.ObtenerTemas();
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @Get(':id')
  public async ListarTemaById(@Param('id') Id: number) {
    return await this.temaService.ObtenerTemasById(Id);
  }
  // Listar Ferias pasandole como parametro el ID del Emprendedor
  // Esto para ver las ferias en las que está participando o está inscrito ese Usuario
 

  // Listar los Emprendedores pasando como parametro el ID de Feria
  // Esto para ver los Usuarios (Emprendedores) que están inscritos en una feria especifica

//   @ApiResponse({
//     status: 400,
//     description: 'No se encontraron resultados o están vacíos',
//   })
//   @Get('listar-participantes')
//   public async ListarParticipantesByFeria() {
//     return await this.participanteService.ObtenerParticipantesByFeria();
//   }
}

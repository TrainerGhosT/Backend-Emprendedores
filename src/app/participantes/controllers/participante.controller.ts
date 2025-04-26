import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParticipanteDTO, ParticipanteFeriaDTO } from '../dto/participante.dto';
import { ParticipanteService } from '../services/participante.service';

@ApiTags('Participantes')
@Controller('participantes')
export class ParticipanteControllers {
  constructor(private readonly participanteService: ParticipanteService) {}

  @Post('agregar-participante')
  public async CrearParticipante(@Body() body: ParticipanteDTO) {
    return await this.participanteService.AgregarParticipante(body);
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @Get('listar-participantes')
  public async ListarParticipantes() {
    return await this.participanteService.ObtenerParticipantes();
  }

  @ApiResponse({
    status: 400,
    description: 'No se encontraron resultados o están vacíos',
  })
  @Get(':id')
  public async ListarParticipanteById(@Param('id') Id: number) {
    return await this.participanteService.ObtenerParticipantesById(Id);
  }
  // Listar Ferias pasandole como parametro el ID del Emprendedor
  // Esto para ver las ferias en las que está participando o está inscrito ese Emprendedor
 
  @ApiResponse({
    status: 200,
    description: 'Lista de ferias en las que participa o está inscrito el emprendedor',
    type: ParticipanteFeriaDTO,
    isArray: true
})
@ApiResponse({
    status: 400,
    description: 'No se encontraron ferias inscritas para este emprendedor',
})
@ApiParam({
    name: 'id',
    description: 'ID del emprendedor',
    type: 'number'
})
@Get('listar-ferias-participante/:id')
public async ListarFeriasByParticipante(@Param('id') Id: number) {
    return await this.participanteService.ObtenerParticipantesById(Id);
}


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

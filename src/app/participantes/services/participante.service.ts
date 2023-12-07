import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ErrorManager } from '../../utils/error.manager';
import { Participantes } from './../entities/participante.entity';


@Injectable()
export class ParticipanteService {

    constructor(
        @InjectRepository(Participantes) private readonly participanteRepository: Repository<Participantes>,
       
    ) {
    }

    public async AgregarParticipante(body: any): Promise<Participantes> {
        try {
            return await this.participanteRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async ObtenerParticipantes(): Promise<Participantes[]> {
        try {
            const participantes: Participantes[] = await this.participanteRepository.query('Select * from Participantes;');
            if (participantes.length === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'Error, No se encontraron resultados',
                });
            }
            return participantes;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }


     public async ObtenerParticipantesById(Id_Emprendedor: number): Promise<Participantes[]> {
    try {
     // const feria: Ferias = await this.feriaRepository.query('call sp_listar_feria_id(?)', [Id_Feria]);
        const participante: Participantes[] = await this.participanteRepository
            .query('Select p.Id_Participante, p.idFeria , f.Titulo  from participantes p inner join ferias f on p.idFeria = f.Id_Feria where idEmprendedor = (?);', [Id_Emprendedor]);
        // .createQueryBuilder('participantes')
        // .where({ Id_Participante })
        // .leftJoinAndSelect('participantes.Emprendedor', 'emprendedores')
        // .leftJoinAndSelect('participantes.Feria' , 'ferias');
        
        if (participante.length === 0) {
            throw new ErrorManager({
                type: 'BAD_REQUEST',
                message: 'Error, No se encontraron resultados',
            });
        }
     
        return participante;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
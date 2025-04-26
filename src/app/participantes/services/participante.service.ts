import { Injectable } from "@nestjs/common";
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


    public async ObtenerParticipantesById(Id_Emprendedor: number): Promise<any[]> {
        try {
            const participaciones = await this.participanteRepository
                .query(`
                    SELECT 
                        p.Id_Participante,
                        p.Fecha_Inscripcion,
                        f.Id_Feria,
                        f.Titulo,
                        f.Descripcion,
                        f.Fecha_Publicacion,
                        a.Descripcion as Area
                      
                    FROM participantes p 
                    INNER JOIN ferias f ON p.idFeria = f.Id_Feria 
                    INNER JOIN areas a ON f.idArea = a.Id_Area
                    WHERE p.idEmprendedor = ?
                    ORDER BY p.Fecha_Inscripcion DESC
                `, [Id_Emprendedor]);
            
            if (participaciones.length === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No se encontraron ferias asignadas para este emprendedor',
                });
            }
         
            return participaciones;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
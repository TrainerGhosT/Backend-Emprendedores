import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from '../../../utils/error.manager';
import { temaDTO } from '../dto/tema.dto';
import { Temas } from '../entities/tema.entity';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Temas) private readonly temaRepository: Repository<Temas>,
  ) {}

  public async AgregarTema(body: temaDTO): Promise<Temas> {
    try {
      return await this.temaRepository.save(body);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async ObtenerTemas(): Promise<Temas[]> {
    try {
      const temas: Temas[] = await this.temaRepository.find();
      if (temas.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No se encontraron resultados',
        });
      }
      return temas;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async ObtenerTemasById(Id_Feria: number): Promise<Temas[]> {
    try {
      // const feria: Ferias = await this.feriaRepository.query('call sp_listar_feria_id(?)', [Id_Feria]);
      const tema: Temas[] = await this.temaRepository.query(
        `select cf.Id_Tema, cf.Titulo , cf.Descripcion, cf.HoraInicio from contenido_ferias cf
left join db_emprendedores.ferias f on f.Id_Feria = cf.idFeria 
where f.Id_Feria = (?);`,
        [Id_Feria],
      );
      // .createQueryBuilder('participantes')
      // .where({ Id_Participante })
      // .leftJoinAndSelect('participantes.Emprendedor', 'emprendedores')
      // .leftJoinAndSelect('participantes.Feria' , 'ferias');

      if (tema.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No se encontraron resultados',
        });
      }

      return tema;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
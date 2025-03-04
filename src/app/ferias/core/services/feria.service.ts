import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Detalles } from '../../detalles/core/entities/detalle.entity';
import { FeriaDTO } from './../dto/feria.dto';
import { Ferias } from './../entities/feria.entity';

import { ErrorManager } from './../../../utils/error.manager';



@Injectable()
export class FeriaService {
  constructor(
    @InjectRepository(Ferias)
    private readonly feriaRepository: Repository<Ferias>,
  ) {}

  public async AgregarFeria(
    body: FeriaDTO
  ): Promise<Ferias & Detalles> {
      try {
      return await this.feriaRepository.query(
        'call sp_agregar_ferias(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          body.Titulo,
          body.Descripcion,
          body.FechaInicio,
          body.FechaFin,
          body.HoraInicio,
          body.HoraFin,
          body.Area,
          body.Costo,
          body.Lugar,
          body.Ubicacion,
          body.Agua,
          body.Luz,
          body.Internet,
          body.Cable,
        ],
      );
        
        
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  public async ObtenerFerias(): Promise<Ferias[]> {
    try {
      const ferias: Ferias[] & Detalles[] = await this.feriaRepository.query('call sp_listar_ferias;');
      // const ferias: Ferias[] & Detalles[] = await this.feriaRepository.query(
      //   'call sp_listar_ferias()',
      // );
      if (ferias.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No se encontraron resultados',
        });
      }
      return ferias;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async ObtenerFeria(Id_Feria: number): Promise<Ferias> {
    try {
     const feria: Ferias = await this.feriaRepository.query('call sp_listar_feria_id(?)', [Id_Feria]);
        //  const feria: Ferias = await this.feriaRepository
        // .createQueryBuilder('ferias')
        // .where({ Id_Feria })
        // .leftJoinAndSelect('ferias.Area', 'areas')
        // .leftJoinAndSelect('ferias.Detalle' , 'detalles')
        // .getOne();
        
      if (!feria) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró resultado',
        });
      }
     
      return feria;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

}

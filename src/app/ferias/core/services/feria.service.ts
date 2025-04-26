import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  public async AgregarFeria(body: FeriaDTO): Promise<Ferias & Detalles> {
    try {
      return await this.feriaRepository.query(
        'call sp_agregar_ferias(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          body.Titulo,
          body.Descripcion_Corta,
          body.Descripcion,
          body.FechaInicio,
          body.FechaFin,
          body.HoraInicio,
          body.HoraFin,
          body.Imagen,
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
      const ferias: Ferias[] & Detalles[] = await this.feriaRepository
        .query(`select f.Id_Feria, f.Titulo, f.Descripcion_Corta, f.Descripcion, f.Imagen, f.Fecha_Publicacion, df.Costo, df.Lugar, df.Ubicacion,f.Fecha_Inicio, f.Fecha_Fin, f.Hora_Inicio, f.Hora_Fin, a.descripcion as Area, ca.Descripcion as Agua, cl.Descripcion as Luz , ci.Descripcion as Internet, cc.Descripcion as Cable  from ferias f
inner join detalle_ferias df on f.Id_Feria = df.idFeria
inner join areas a on f.idArea = a.Id_Area
inner join condicion_agua ca on df.idCondicionAgua = ca.Id_CondicionAgua
inner join condicion_luz cl on df.idCondicionLuz = cl.Id_CondicionLuz
inner join condicion_internet ci on df.idCondicionInternet = ci.Id_CondicionInternet
inner join condicion_cable cc on df.idCondicionCable = cc.Id_CondicionCable; `);
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
      const feria: Ferias = await this.feriaRepository.query(
        'call sp_listar_feria_id(?)',
        [Id_Feria],
      );
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

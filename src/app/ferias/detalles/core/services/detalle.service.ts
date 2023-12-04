import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from '../../../../utils/error.manager';
import { DetalleDTO } from '../dto/detalle.dto';
import { Detalles } from '../entities/detalle.entity';


@Injectable()
export class DetalleService {
  constructor(
    @InjectRepository(Detalles)
    private readonly detalleRepository: Repository<Detalles>,
  ) {}

  public async AgregarDetalle(body: DetalleDTO): Promise<Detalles> {
    try {
      return await this.detalleRepository.save(body);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async ObtenerDetalles(): Promise<Detalles[]> {
    try {
      const detalle: Detalles[] = await this.detalleRepository.find();
      if (detalle.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No Se Encontraron Resultados',
        });
      }
      return detalle;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}

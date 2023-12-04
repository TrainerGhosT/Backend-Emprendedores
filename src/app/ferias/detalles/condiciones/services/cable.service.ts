import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from '../../../../utils/error.manager';
import { CableDTO } from '../dto/condicion.dto';
import { Cable } from '../entities/cable.entity';

@Injectable()
export class CableService {
  constructor(
    @InjectRepository(Cable)
    private readonly cableRepository: Repository<Cable>,
  ) {}

  public async AgregarCable(body: CableDTO): Promise<Cable> {
    try {
      return await this.cableRepository.save(body);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async ObtenerCable(): Promise<Cable[]> {
    try {
      const cable: Cable[] = await this.cableRepository.find();
      if (cable.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No se encontraron resultados',
        });
      }
      return cable;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}

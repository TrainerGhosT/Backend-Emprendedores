import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from '../../../../utils/error.manager';
import { InternetDTO } from '../dto/condicion.dto';
import { Internet } from '../entities/internet.entity';

@Injectable()
export class InternetService {
  constructor(
    @InjectRepository(Internet)
    private readonly internetRepository: Repository<Internet>,
  ) {}

  public async AgregarInternet(body: InternetDTO): Promise<Internet> {
    try {
      return await this.internetRepository.save(body);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async ObtenerInternet(): Promise<Internet[]> {
    try {
      const internet: Internet[] = await this.internetRepository.find();
      if (internet.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No se encontraron resultados',
        });
      }
      return internet;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}

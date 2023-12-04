import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ErrorManager } from '../../../../utils/error.manager';

import { AguaDTO } from "../dto/condicion.dto";
import { Agua } from "../entities/agua.entity";

@Injectable()
export class AguaService {

    constructor(
        @InjectRepository(Agua) private readonly aguaRepository: Repository<Agua>,
       
    ) {
    }

    public async AgregarAgua(body: AguaDTO): Promise<Agua> {
        try {
            return await this.aguaRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async ObtenerAgua(): Promise<Agua[]> {
        try {
            const agua: Agua[] = await this.aguaRepository.find();
            if (agua.length === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'Error, No se encontraron resultados',
                });
            }
            return agua;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
    
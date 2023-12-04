import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ErrorManager } from '../../../../utils/error.manager';


import { LuzDTO } from "../dto/condicion.dto";
import { Luz } from "../entities/luz.entity";

@Injectable()
export class LuzService {

    constructor(
        @InjectRepository(Luz) private readonly luzRepository: Repository<Luz>,
       
    ) {
    }

    public async AgregarLuz(body: LuzDTO): Promise<Luz> {
        try {
            return await this.luzRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async ObtenerLuz(): Promise<Luz[]> {
        try {
            const luz: Luz[] = await this.luzRepository.find();
            if (luz.length === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'Error, No se encontraron resultados',
                });
            }
            return luz;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
    
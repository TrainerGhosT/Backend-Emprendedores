import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ErrorManager } from '../../utils/error.manager';
import { AreaDTO } from "../dto/area.dto";
import { Areas } from "../entities/area.entity";

@Injectable()
export class AreaService {

    constructor(
        @InjectRepository(Areas) private readonly areaRepository: Repository<Areas>,
       
    ) {
    }

    public async AgregarArea(body: AreaDTO): Promise<Areas> {
        try {
            return await this.areaRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async ObtenerAreas(): Promise<Areas[]> {
        try {
            const areas: Areas[] = await this.areaRepository.find();
            if (areas.length === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'Error, No se encontraron resultados',
                });
            }
            return areas;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
    
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RolDTO } from "../dto/rol.dto";
import { ErrorManager } from './../../../utils/error.manager';
import { Roles } from './../entities/rol.entity';

@Injectable()
export class RolService { 

    constructor(
        @InjectRepository(Roles) private readonly rolRepository: Repository<Roles>,
       
    ) {
    }

    public async AgregarRol(body: RolDTO): Promise<Roles> { 
      try {
             body.Descripcion = await body.Descripcion.toLowerCase();
            return await this.rolRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message); 
        }
    }

    public async ObtenerRoles(): Promise<Roles[]> {
        try {
      const roles: Roles[] = await this.rolRepository.find();
      if (roles.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No se encontraron resultados',
        });
      }
      return roles;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
    }


}
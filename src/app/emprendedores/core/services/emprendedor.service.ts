import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { Repository } from "typeorm";
import { Emprendedores } from "../entities/emprendedor.entity";
import { ErrorManager } from './../../../utils/error.manager';
import { EmprendedorDTO } from './../dto/emprendedor.dto';

@Injectable()
export class EmprendedorService { 

    constructor(
        @InjectRepository(Emprendedores) private readonly emprendedorRepository: Repository<Emprendedores>,
       
    ) {
    }

     public async AgregarEmprendedor(body: EmprendedorDTO): Promise<Emprendedores> { 
         try {
            body.Contraseña = await bcrypt.hash(body.Contraseña, +process.env.HASH_SALT);
            return await this.emprendedorRepository.save(body); 
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message); 
        }
    }

    public async ObtenerEmprendedores(): Promise<Emprendedores[]> {
        try {
      const emprendedores: Emprendedores[] = await this.emprendedorRepository.query('call sp_listar_emprendedores');
      if (emprendedores.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Error, No Se Encontraron Resultados',
        });
      }
      return emprendedores;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
    }

    
}
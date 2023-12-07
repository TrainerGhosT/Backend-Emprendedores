import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Emprendedores } from '../entities/emprendedor.entity';
import { ErrorManager } from './../../../utils/error.manager';
import { EmprendedorDTO } from './../dto/emprendedor.dto';

@Injectable()
export class EmprendedorService {
  constructor(
    @InjectRepository(Emprendedores)
    private readonly emprendedorRepository: Repository<Emprendedores>,
  ) {}

  public async AgregarEmprendedor(
    body: EmprendedorDTO,
  ): Promise<Emprendedores> {
    try {
      body.Contraseña = await bcrypt.hash(
        body.Contraseña,
        +process.env.HASH_SALT,
      );
      return await this.emprendedorRepository.query(
        'call sp_agregar_emprendedor(?,?,?,?,?,?,?,?,?,?)',
        [
          body.Cedula,
          body.Nombre,
          body.Apellidos,
          body.Correo,
          body.Contraseña,
          body.Telefono,
          body.Direccion,
          body.FechaNacimiento,
          body.Rol,
          body.Area
        ],
        
      );
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async ObtenerEmprendedores(): Promise<Emprendedores[]> {
    try {
      const emprendedores: Emprendedores[] =
        await this.emprendedorRepository
          .query('select * from list_view_emprendedores;')

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

  public async findUserById(Id_Emprendedor: number): Promise<Emprendedores> {
    try {
      const emprendedor: Emprendedores = await this.emprendedorRepository
        //query('call sp_listar_emprendedor_id(?)', [Id_Emprendedor)
        .createQueryBuilder('emprendedores')
        .where({ Id_Emprendedor })
        .leftJoinAndSelect('emprendedores.Rol', 'roles')
        .leftJoinAndSelect('emprendedores.Area' , 'areas')
        .getOne();
      if (!emprendedor) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró resultado',
        });
      }
     
      return emprendedor;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async findBy({
    key,
    value,
  }: {
    key: keyof EmprendedorDTO;
    value: any;
  }) {
    try {
      const emprendedor: Emprendedores = await this.emprendedorRepository
        .createQueryBuilder('emprendedores')
        .addSelect('emprendedores.Contraseña')
        .where({ [key]: value })
        .getOne();

      return emprendedor;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}

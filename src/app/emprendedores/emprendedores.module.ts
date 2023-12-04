import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmprendedorControllers } from './core/controllers/emprendedor.controller';
import { Emprendedores } from './core/entities/emprendedor.entity';
import { EmprendedorService } from './core/services/emprendedor.service';
import { RolControllers } from './roles/controllers/rol.controller';
import { Roles } from './roles/entities/rol.entity';
import { RolService } from './roles/services/rol.service';


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Emprendedores,
      Roles,
    ]),
  ],
  providers: [RolService, EmprendedorService],
  controllers: [RolControllers, EmprendedorControllers],
  exports: [RolService, EmprendedorService, TypeOrmModule],
})
export class EmprendedoresModule {}

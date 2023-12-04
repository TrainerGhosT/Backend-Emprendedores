import { TypeOrmModule } from '@nestjs/typeorm';
import { Global, Module } from '@nestjs/common';
import { Emprendedores } from './core/entities/emprendedor.entity'; 
import { Roles } from './roles/entities/rol.entity'


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Emprendedores,
      Roles,
    ]),
  ],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class EmprendedoresModule {}

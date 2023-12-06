import { Global, Module } from '@nestjs/common';
import { EmprendedorService } from '../emprendedores/core/services/emprendedor.service';
import { EmprendedoresModule } from '../emprendedores/emprendedores.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';


@Global()
@Module({
  imports: [EmprendedoresModule],
  providers: [AuthService, EmprendedorService],
  controllers: [AuthController]
})
export class AuthModule {}
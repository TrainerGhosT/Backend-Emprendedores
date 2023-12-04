import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaControllers } from './controllers/area.controller';
import { Areas } from './entities/area.entity';
import { AreaService } from './services/area.service';
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Areas,
    ]),
  ],
  providers: [AreaService],
  controllers: [AreaControllers],
  exports: [AreaService,TypeOrmModule],
})
export class AreasModule {}

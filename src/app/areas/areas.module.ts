import { TypeOrmModule } from '@nestjs/typeorm';
import { Global, Module } from '@nestjs/common';
import { Areas } from './entities/area.entity'
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Areas,
    ]),
  ],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class AreasModule {}

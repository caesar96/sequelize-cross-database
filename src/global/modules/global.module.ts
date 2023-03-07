import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from '../entities/usuario.model';
import { GlobalService } from '../services/global.service';
import { GlobalController } from '../controllers/global.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([Usuario], 'main'),
  ],
  providers: [GlobalService],
  controllers: [GlobalController],
})
export class GlobalModule {}
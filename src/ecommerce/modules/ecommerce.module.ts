import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from '../../global/entities/usuario.model';
import { EcommerceController } from '../controllers/ecommerce.controller';
import { Orden } from '../entities/orden.model';
import { EcommerceService } from '../services/ecommerce.service';

@Module({
  imports: [
    // SequelizeModule.forFeature([Usuario, Orden ], 'ecommerce'),
  ],
  providers: [EcommerceService],
  controllers: [EcommerceController],
})
export class EcommerceModule {}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from '../../global/entities/usuario.model';
import { Orden } from '../entities/orden.model';

@Injectable()
export class EcommerceService {
  constructor(
    // @InjectModel(Orden, 'ECOMMERCE_SEQUELIZE')
    // private ordenModel: typeof Orden,
  ) {}

  async findAll(): Promise<Orden[]> {
    return Orden.findAll({
      include: [{ model: Usuario }],
    });
  }

  async findOne(id: number): Promise<Orden> {
    return Orden.findByPk(id, {
      include: [{ model: Usuario }],
    });
  }

  async create({fecha, IdUsuario}: {fecha: Date | string, IdUsuario: number}) {
    return Orden.create({fecha, IdUsuario})
  }
}
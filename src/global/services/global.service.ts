import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Orden } from 'src/ecommerce/entities/orden.model';
import { Usuario } from '../entities/usuario.model';

@Injectable()
export class GlobalService {
  constructor(
    // @InjectModel(Usuario, 'GLOBAL_SEQUELIZE')
    // private UsuarioModel: typeof Usuario,
  ) {}

  async create ({nombre}) {
    return Usuario.create({nombre});
  }

  async findAll(): Promise<Usuario[]> {
    return Usuario.findAll({
      include: [
        {
          model: Orden,
          as: 'ordenes'
        }
      ]
    });
  }

  async findOne(id: number): Promise<Usuario> {
    return Usuario.findByPk(id);
  }
}
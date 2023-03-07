import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Orden } from 'src/ecommerce/entities/orden.model';

@Table({ tableName: 'usuarios', schema: 'global'})
export class Usuario extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre: string;

  @HasMany(()=>  Orden, 'IdUsuario')
  ordenes : Orden[];
}
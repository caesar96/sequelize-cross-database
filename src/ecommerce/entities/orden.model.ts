import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Usuario } from '../../global/entities/usuario.model';

@Table({ tableName: 'ordenes', schema: 'ecommerce'})
export class Orden extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  fecha: Date;

  @ForeignKey(() => Usuario)
  @Column
  IdUsuario: number;
}
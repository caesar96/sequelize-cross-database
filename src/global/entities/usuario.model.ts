import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'usuarios', schema: 'global'})
export class Usuario extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  nombre: string;
}
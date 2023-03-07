import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Orden } from '../entities/orden.model';
import { EcommerceService } from '../services/ecommerce.service';


@Controller('ecommerce')
export class EcommerceController {
  constructor(private readonly ecommerce$: EcommerceService) {}

  @Get('ordenes')
  async findAll(): Promise<Orden[]> {
    return this.ecommerce$.findAll();
  }

  @Get('ordenes/:id')
  async findOne(@Param('id') id: number): Promise<Orden> {
    return this.ecommerce$.findOne(id);
  }

  @Post('create')
  async create(@Body() body: {fecha: string, IdUsuario}) {
    return this.ecommerce$.create(body)
  }
}
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from '../entities/usuario.model';
import { GlobalService } from '../services/global.service';

@Controller('global')
export class GlobalController {
  constructor(private readonly global$: GlobalService) {}

  @Get('usuarios')
  async findAll(): Promise<Usuario[]> {
    return this.global$.findAll();
  }

  @Get('usuarios/:id')
  async findOne(@Param('id') id: number): Promise<Usuario> {
    return this.global$.findOne(id);
  }

  @Post('create')
  async create(@Body() body: {nombre: string}) {
    return this.global$.create(body);
  }
}
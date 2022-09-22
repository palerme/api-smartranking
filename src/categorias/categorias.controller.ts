import { CategoriasService } from './categorias.service';
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { CriarCategoriaDto } from './dto/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
    constructor(private readonly categoriaService: CategoriasService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarCategoria(
        @Body() criarCategoriaDto: CriarCategoriaDto): Promise<Categoria> {
        return await this.categoriaService.criarCategoria(criarCategoriaDto)
    }

    @Get()
    @UsePipes(ValidationPipe)
    async consultarCategoria(): Promise<Categoria[]> {

        return await this.categoriaService.consultarTodasCategorias();

    }
}

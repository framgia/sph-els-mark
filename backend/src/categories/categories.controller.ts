import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/category-create.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(['student/categories', 'admin/categories'])
  async all() {
    return this.categoriesService.find({});
  }

  @Post('admin/categories/create')
  async create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.save(body);
  }
}

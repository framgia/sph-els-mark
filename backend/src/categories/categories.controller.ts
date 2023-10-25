import { Controller, Get, Body, Post, Req, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/category-create.dto';

@Controller()
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get(['student/categories', 'admin/categories'])
  async all() {
    return this.categoriesService.find({});
  }

  @Get(['student/categories/words', 'admin/categories/words'])
  async allWords() {
    return this.categoriesService.find({
      relations: ['words'],
    });
  }

  @Post('admin/category/create')
  async create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.save(body);
  }
}

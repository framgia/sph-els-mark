import {
  Controller,
  Get,
  Body,
  Post,
  Req,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/category-create.dto';
import { AddWordDto } from './dto/add-word.dto';
import { WordsService } from './words.service';
import { ChoicesService } from './choices.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { In } from 'typeorm';
@Controller()
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private wordsService: WordsService,
    private choicesService: ChoicesService,
  ) {}
  // Reminder: Add authguard
  @Get(['student/categories', 'admin/categories'])
  async all() {
    return this.categoriesService.find({});
  }
  // Reminder: Add authguard
  @Get(['student/:categoryId/words', 'admin/:categoryId/words'])
  async allWords(@Param('categoryId') categoryId: number) {
    return await this.categoriesService.findOne({
      where: {
        category_id: categoryId,
      },
      relations: ['words'],
    });
  }
  // Reminder: Add authguard
  @Post('admin/category/create')
  async create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.save(body);
  }

  // Reminder: Add authguard
  @Get(['student/words/:wordId', 'admin/words/:wordId'])
  async getChoices(@Param('wordId') wordId: number) {
    const words = await this.wordsService.findOne({
      where: { word_id: wordId },
      relations: ['choices'],
    });

    if (words) {
      const formattedData = {
        word_id: words.word_id,
        given_word: words.given_word,
        correct_word: words.correct_word,
        choices: words.choices.map((choice) => {
          return {
            id: choice.id,
            options: choice.options,
          };
        }),
      };

      return formattedData;
    }

    throw new NotFoundException('Word not found!');
  }
  // Reminder: Add authguard
  @Post('admin/category/:category_id/add')
  async createWord(
    @Param('category_id') category_id: number,
    @Body() body: AddWordDto,
  ) {
    const category = await this.categoriesService.findOne({
      where: { category_id },
    });

    if (!category) {
      throw new NotFoundException('Category not found!');
    }
    return this.wordsService.save({
      category_id,
      given_word: body.given_word,
      correct_word: body.correct_word,
      choices: body.choices,
    });
  }

  @Put('admin/category/:category_id/edit')
  async editCategory(
    @Param('category_id') category_id: number,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    const category = await this.categoriesService.findOne({
      where: { category_id },
    });

    if (!category) {
      throw new NotFoundException('Category not found!');
    }

    await this.categoriesService.update(category_id, {
      title,
      description,
    });

    return this.categoriesService.findOne({ where: { category_id } });
  }

  @Delete('admin/category/delete/:category_id')
  async deleteCategory(@Param('category_id') category_id: number) {
    const category = await this.categoriesService.findOne({
      where: { category_id },
    });

    if (!category) {
      throw new NotFoundException('Category not found!');
    }

    const words = await this.wordsService.find({ where: { category } });
    const wordId = words.map((word) => word.word_id);

    await this.choicesService.delete({ options: In(wordId) });
    await this.wordsService.delete({ word_id: In(wordId) });
    await this.categoriesService.delete(category);

    return { code: 200, message: 'Category deleted successfully!' };
  }
}

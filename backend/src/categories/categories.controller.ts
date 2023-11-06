import {
  Controller,
  Get,
  Body,
  Post,
  Req,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/category-create.dto';
import { AddWordDto } from './dto/add-word.dto';
import { WordsService } from './words.service';
import { ChoicesService } from './choices.service';
import { HttpException, HttpStatus } from '@nestjs/common';

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
  @Get([
    'student/:categoryId/words/:wordsId',
    'admin/:categoryId/words/:wordsId',
  ])
  async getChoices(
    @Param('categoryId') categoryId: number,
    @Param('wordsId') wordsId: number,
  ) {
    const words = await this.wordsService.findOne({
      where: { word_id: wordsId, category_id: categoryId },
      relations: ['choices'],
    });

    if (words && categoryId) {
      const formattedData = {
        word_id: words.word_id,
        category_id: words.category_id,
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

    return null;
  }
  // Reminder: Add authguard
  @Post('admin/category/:category_id/add')
  async createWord(
    @Param('category_id') category_id: number,
    @Body() body: AddWordDto,
  ) {
    if (category_id) {
      return this.wordsService.save({
        category_id,
        given_word: body.given_word,
        correct_word: body.correct_word,
        choices: body.choices,
      });
    }

    throw new NotFoundException('Category not found!');
  }
}

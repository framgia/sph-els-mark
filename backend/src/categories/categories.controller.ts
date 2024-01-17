import {
  Controller,
  Get,
  Body,
  Post,
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
import { UseGuards } from '@nestjs/common';
import { In } from 'typeorm';
import { AuthGuard } from 'src/auth/auth.guard';
import { Choices } from './choices';
@Controller()
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private wordsService: WordsService,
    private choicesService: ChoicesService
  ) {}

  @UseGuards(AuthGuard)
  @Get(['student/categories', 'admin/categories'])
  async all() {
    return this.categoriesService.find({});
  }

  @Get(['student/:categoryId/words', 'admin/:categoryId/words'])
  async allWords(@Param('categoryId') categoryId: number) {
    return await this.categoriesService.findOne({
      where: {
        category_id: categoryId,
      },
      relations: ['words'],
    });
  }

  @UseGuards(AuthGuard)
  @Post('admin/category/create')
  async create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.save(body);
  }

  @Get(['student/word/:wordId', 'admin/word/:wordId'])
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
        choices: words.choices.map((choice: Choices) => {
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

  @UseGuards(AuthGuard)
  @Post('admin/category/:category_id/add')
  async createWord(
    @Param('category_id') category_id: number,
    @Body() body: AddWordDto
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
    @Body('description') description: string
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

  @UseGuards(AuthGuard)
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

  @Put('admin/category/:category_id/word/:word_id/edit')
  async editWord(
    @Param('category_id') category_id: number,
    @Param('word_id') word_id: number,
    @Body() body: AddWordDto
  ) {
    const category = await this.categoriesService.findOne({
      where: { category_id },
    });

    if (!category) {
      throw new NotFoundException('Category not found!');
    }

    const word = await this.wordsService.findOne({
      where: { category_id, word_id },
      relations: ['choices'],
    });

    if (!word) {
      throw new NotFoundException('Word not found in the specified category!');
    }

    word.given_word = body.given_word;
    word.correct_word = body.correct_word;

    word.choices = body.choices;
    const updatedWord = await this.wordsService.save(word);

    return updatedWord;
  }

  @Delete('admin/category/:category_id/word/:word_id/delete')
  async deleteWordandChoices(
    @Param('category_id') category_id: number,
    @Param('word_id') word_id: number
  ) {
    const category = await this.categoriesService.findOne({
      where: { category_id },
    });

    if (!category) {
      throw new NotFoundException('Category not found!');
    }

    const word = await this.wordsService.findOne({ where: { word_id } });

    if (!word) {
      throw new NotFoundException('Word not found!');
    }
    const words = await this.wordsService.find({ where: { category } });
    const wordsId = words.map((word) => word.word_id);

    await this.choicesService.delete({ options: In(wordsId) });
    await this.wordsService.delete({ word_id });

    return { code: 200, message: 'Word deleted successfully!' };
  }
}

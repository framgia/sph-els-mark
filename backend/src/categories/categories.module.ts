import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './category';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Words } from './words';
import { Choices } from './choices';
import { WordsService } from './words.service';
import { ChoicesService } from './choices.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Words, Choices])],
  controllers: [CategoriesController],
  providers: [CategoriesService, WordsService, ChoicesService],
})
export class CategoriesModule {}

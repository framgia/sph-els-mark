import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './category';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Words } from './words';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Words])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}

import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './category';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Words } from './words';
import { Choices } from './choices';
import { WordsService } from './words.service';
import { ChoicesService } from './choices.service';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from '@/user/user';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Category, Words, Choices, User]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, WordsService, ChoicesService, UserService],
})
export class CategoriesModule {}

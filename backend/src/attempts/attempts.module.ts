import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attempts } from './attempts';
import { AttemptsController } from './attempts.controller';
import { AttemptsService } from './attempts.service';
import { UserService } from 'src/user/user.service';
import { WordsService } from 'src/categories/words.service';
import { User } from 'src/user/user';

import { AnswerService } from 'src/answer/answer.service';
import { Answers } from 'src/answer/answers';
import { JwtModule } from '@nestjs/jwt';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/category';
@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Attempts, User, Category, Answers]),
  ],
  controllers: [AttemptsController],
  providers: [AttemptsService, UserService, CategoriesService, AnswerService],
})
export class AttemptsModule {}

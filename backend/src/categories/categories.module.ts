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
import { User } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import { AnswerService } from '@/answer/answer.service';
import { Answers } from '@/answer/answers';
import { AttemptsService } from '@/attempts/attempts.service';
import { Attempts } from '@/attempts/attempts';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([
      Category,
      Words,
      Choices,
      User,
      Answers,
      Attempts,
    ]),
  ],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    WordsService,
    ChoicesService,
    UserService,
    AnswerService,
    AttemptsService,
  ],
})
export class CategoriesModule {}

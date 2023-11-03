import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answers } from './answers';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { WordsService } from 'src/categories/words.service';
import { Words } from 'src/categories/words';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user';

@Module({
  imports: [TypeOrmModule.forFeature([Answers, Words])],
  controllers: [AnswerController],
  providers: [AnswerService, WordsService],
})
export class AnswerModule {}

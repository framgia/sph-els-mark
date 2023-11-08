import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answers } from './answers';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { WordsService } from 'src/categories/words.service';
import { Words } from 'src/categories/words';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user';
import { AttemptsService } from 'src/attempts/attempts.service';
import { Attempts } from 'src/attempts/attempts';
import { SharedModule } from 'src/shared/shared.module';
@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Answers, Words, Attempts])],
  controllers: [AnswerController],
  providers: [AnswerService, WordsService, AttemptsService],
})
export class AnswerModule {}

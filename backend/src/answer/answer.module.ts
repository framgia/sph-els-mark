import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answers } from './answers';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { WordsService } from 'src/categories/words.service';
import { Words } from 'src/categories/words';
import { AttemptsService } from 'src/attempts/attempts.service';
import { Attempts } from 'src/attempts/attempts';
import { UserService } from '@/user/user.service';
import { User } from '@/user/user';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Answers, Words, Attempts, User]),
  ],
  controllers: [AnswerController],
  providers: [AnswerService, WordsService, AttemptsService, UserService],
})
export class AnswerModule {}

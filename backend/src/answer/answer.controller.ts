import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { WordsService } from '../categories/words.service';
import { AttemptsService } from '../attempts/attempts.service';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { UserService } from '@/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { usersAnswerDto } from './dto/usersAnswer.dto';

@Controller()
export class AnswerController {
  constructor(
    private answerService: AnswerService,
    private wordsService: WordsService,
    private attemptsService: AttemptsService,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  @UseGuards(AuthGuard)
  @Post('student/category/:category_id/attempt/:attempt_id')
  async usersAnswer(
    @Req() request: Request,
    @Param('category_id') category_id: number,
    @Param('attempt_id') attempt_id: number,
    @Body() body: usersAnswerDto
  ) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);
    const student = await this.userService.findOne({ where: { user_id } });

    const attempts = await this.attemptsService.findOne({
      where: { attempt_id },
    });
    const wordId = await this.wordsService.findOne({
      where: { word_id: body.word_id },
    });
    const category = await this.wordsService.findOne({
      where: { category_id },
    });

    if (!student) {
      throw new ForbiddenException('Forbidden Resource');
    }
    if (!wordId) {
      throw new NotFoundException('Word Not Found');
    }
    if (!category) {
      throw new NotFoundException('Category Not Found');
    }
    if (!attempts) {
      console.log(attempts);
      throw new NotFoundException('Attempt Error');
    }
    return await this.answerService.save({
      words: wordId.word_id,
      answer: body.answer,
      question_no: body.question_no,
      attempts: attempt_id,
    });
  }
}

import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { WordsService } from 'src/categories/words.service';
import { usersAnswerDto } from './dto/usersAnswer.dto';
import { AttemptsService } from 'src/attempts/attempts.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt/dist';
import { Request } from 'express';
@Controller()
export class AnswerController {
  constructor(
    private answerService: AnswerService,
    private wordsService: WordsService,
    private attemptsService: AttemptsService,
    private jwtService: JwtService
  ) {}

  @UseGuards(AuthGuard)
  @Post('student/category/:category_id/word/:word_id/:attempt_id/answer')
  async usersAnswer(
    @Req() request: Request,
    @Param('word_id') word_id: number,
    @Param('category_id') category_id: number,
    @Param('attempt_id') attempt_id: number,
    @Body() body: usersAnswerDto
  ) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);
    const wordId = await this.wordsService.findOne({
      where: { word_id },
    });
    const category = await this.wordsService.findOne({
      where: { category_id },
    });
    const attempts = await this.attemptsService.findOne({
      where: { attempt_id },
    });

    if (!wordId) {
      throw new NotFoundException(' Word and not found!');
    }
    if (!category) {
      throw new NotFoundException(' Category and not found!');
    }

    if (user_id) {
      return await this.answerService.save({
        attempts: attempts.attempt_id,
        words: wordId.word_id,
        answer: body.answer,
        question_no: body.question_no,
      });
    }
    throw new NotFoundException(' Please Login');
  }
}

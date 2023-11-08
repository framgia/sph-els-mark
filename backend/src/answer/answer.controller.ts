import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { WordsService } from 'src/categories/words.service';
import { usersAnswerDto } from './dto/usersAnswer.dto';
import { AttemptsService } from 'src/attempts/attempts.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt/dist';
import { Response, Request } from 'express';
@Controller()
export class AnswerController {
  constructor(
    private answerService: AnswerService,
    private wordsService: WordsService,
    private attemptsService: AttemptsService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('student/category/:category_id/word/:word_id/answer')
  async usersAnswer(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
    @Param('category_id') category_id: number,
    @Param('word_id') word_id: number,
    @Body() body: usersAnswerDto,
  ) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);

    const words = await this.wordsService.findOne({
      where: { word_id },
    });

    const userAttempt = this.attemptsService.find({
      where: { user_id },
    });

    if (!words) {
      throw new NotFoundException(' Word not found!');
    }

    const userAnswer = await this.answerService.save({
      answer: body.answer,
      question_no: body.question_no,
    });

    return { userAnswer };
  }
}

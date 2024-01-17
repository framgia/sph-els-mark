import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { WordsService } from '../categories/words.service';
import { AttemptsService } from '../attempts/attempts.service';
import { AuthGuard } from '../auth/auth.guard';
import { usersAnswerDto } from './dto/usersAnswer.dto';

@Controller()
export class AnswerController {
  constructor(
    private answerService: AnswerService,
    private wordsService: WordsService,
    private attemptsService: AttemptsService
  ) {}

  @UseGuards(AuthGuard)
  @Post('student/category/:category_id/attempt/:attempt_id')
  async usersAnswer(
    @Param('category_id') category_id: number,
    @Param('attempt_id') attempt_id: number,
    @Body() body: usersAnswerDto
  ) {
    const attempts = await this.attemptsService.findOne({
      where: { attempt_id },
    });
    const wordId = await this.wordsService.findOne({
      where: { word_id: body.word_id },
    });
    const category = await this.wordsService.findOne({
      where: { category_id },
    });

    if (!wordId) {
      throw new NotFoundException('Word Not Found');
    }
    if (!category) {
      throw new NotFoundException('Category Not Found');
    }
    if (!attempts) {
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

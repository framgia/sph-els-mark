import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { WordsService } from 'src/categories/words.service';
import { usersAnswerDto } from './dto/usersAnswer.dto';

@Controller()
export class AnswerController {
  constructor(
    private answerService: AnswerService,
    private wordsService: WordsService,
  ) {}

  @Post('student/category/:category_id/word/:word_id/answer')
  async usersAnswer(
    @Param('word_id') word_id: number,
    @Param('category_id') category_id: number,
    @Body() body: usersAnswerDto,
  ) {
    const words = await this.wordsService.findOne({
      where: { word_id, category_id },
    });

    if (!words) {
      throw new NotFoundException('Category or Word not found!');
    }
    return await this.answerService.save({
      words,
      answer: body.answer,
      question_no: body.question_no,
    });
  }
}

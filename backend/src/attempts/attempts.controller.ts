import {
  Controller,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AttemptsService } from './attempts.service';
import { CategoriesService } from 'src/categories/categories.service';
import { AnswerService } from 'src/answer/answer.service';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt/dist';
import { Request } from 'express';
@Controller()
export class AttemptsController {
  constructor(
    private attemptsService: AttemptsService,
    private categoriesService: CategoriesService,
    private userService: UserService,
    private answerService: AnswerService,
    private jwtService: JwtService
  ) {}

  @UseGuards(AuthGuard)
  @Post('student/category/:category_id/done')
  async userAttempt(
    @Req() request: Request,
    @Param('category_id') category_id: number,
    @Param('word_id') word_id: number
  ) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);

    const category = await this.categoriesService.findOne({
      where: { category_id },
    });

    const answer = await this.answerService.findOne({
      where: { word_id },
    });

    if (!category) {
      throw new NotFoundException('Category not found!');
    } else if (!answer) {
      throw new NotFoundException('Answers are not yet recorded');
    }
    return await this.attemptsService.save({
      user: user_id,
      category: category.category_id,
    });
  }
}

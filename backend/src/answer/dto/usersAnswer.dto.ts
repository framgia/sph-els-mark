import { IsNotEmpty } from 'class-validator';

export class usersAnswerDto {
  @IsNotEmpty()
  word_id: number;

  @IsNotEmpty()
  answer: string;

  @IsNotEmpty()
  question_no: number;
}

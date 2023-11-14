import { IsNotEmpty } from 'class-validator';

export class usersAnswerDto {
  @IsNotEmpty()
  answer: string;

  @IsNotEmpty()
  question_no: number;
}

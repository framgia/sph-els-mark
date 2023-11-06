import { IsNotEmpty, IsArray, ValidateNested, IsObject } from 'class-validator';
import { Choices } from '../choices';

export class AddWordDto {
  @IsNotEmpty()
  given_word: string;

  @IsArray()
  @ValidateNested({ each: true })
  choices: { options: string }[];

  @IsNotEmpty()
  correct_word: string;
}

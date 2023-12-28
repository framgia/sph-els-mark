import { IsNotEmpty, IsArray, ValidateNested } from 'class-validator';

export class AddWordDto {
  @IsNotEmpty()
  given_word: string;

  @IsArray()
  @ValidateNested({ each: true })
  choices: { options: string }[];

  @IsNotEmpty()
  correct_word: string;
}

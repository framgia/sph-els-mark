import { IsOptional } from 'class-validator';

export class CreateCategoryDto {
  title?: string;

  description?: string;
}

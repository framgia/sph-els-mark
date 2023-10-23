import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category';
import { SharedService } from 'src/shared/shared-service';
import { Repository } from 'typeorm';
@Injectable()
export class CategoriesService extends SharedService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {
    super(categoryRepository);
  }
}

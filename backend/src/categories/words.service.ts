import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Words } from './words';
import { SharedService } from 'src/shared/shared-service';
import { Repository } from 'typeorm';
@Injectable()
export class WordsService extends SharedService {
  constructor(
    @InjectRepository(Words)
    private readonly wordsRepository: Repository<Words>,
  ) {
    super(wordsRepository);
  }
}

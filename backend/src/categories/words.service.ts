import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared-service';
import { Repository } from 'typeorm';
import { Words } from './words';
@Injectable()
export class WordsService extends SharedService {
  constructor(
    @InjectRepository(Words)
    private readonly wordsRepository: Repository<Words>,
  ) {
    super(wordsRepository);
  }
}

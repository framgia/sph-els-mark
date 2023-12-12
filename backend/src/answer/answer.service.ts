import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared-service';
import { Answers } from './answers';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService extends SharedService {
  constructor(
    @InjectRepository(Answers)
    private readonly answersRepository: Repository<Answers>
  ) {
    super(answersRepository);
  }
}

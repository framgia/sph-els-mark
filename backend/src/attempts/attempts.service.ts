import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared-service';
import { Repository } from 'typeorm';
import { Attempts } from './attempts';

@Injectable()
export class AttemptsService extends SharedService {
  constructor(
    @InjectRepository(Attempts)
    private readonly attemptsRepository: Repository<Attempts>
  ) {
    super(attemptsRepository);
  }
}

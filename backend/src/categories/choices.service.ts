import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared-service';
import { Repository } from 'typeorm';
import { Choices } from './choices';
@Injectable()
export class ChoicesService extends SharedService {
  constructor(
    @InjectRepository(Choices)
    private readonly choicesRepository: Repository<Choices>
  ) {
    super(choicesRepository);
  }
}

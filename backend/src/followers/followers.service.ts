import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared-service';
import { Repository } from 'typeorm';
import { Followers } from './follow';

@Injectable()
export class FollowersService extends SharedService {
  constructor(
    @InjectRepository(Followers)
    private readonly followRepository: Repository<Followers>
  ) {
    super(followRepository);
  }
}

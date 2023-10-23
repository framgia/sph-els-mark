import { Controller, Get } from '@nestjs/common';
import { FollowersService } from './followers.service';

@Controller()
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Get('student/followers')
  async all() {
    return this.followersService.find({});
  }
}

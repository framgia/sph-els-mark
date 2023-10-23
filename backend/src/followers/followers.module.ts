import { Module } from '@nestjs/common';
import { FollowersController } from './followers.controller';
import { FollowersService } from './followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Followers } from './follow';

@Module({
  imports: [TypeOrmModule.forFeature([Followers])],
  controllers: [FollowersController],
  providers: [FollowersService],
})
export class FollowersModule {}

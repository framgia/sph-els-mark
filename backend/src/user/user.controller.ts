import {
  Controller,
  Get,
  Body,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AdminRegisterDto } from './dtos/admin.dto';
import * as bcrypt from 'bcryptjs';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/admin')
  async admin() {
    return this.userService.find({
      where: {
        is_admin: true,
      },
    });
  }
}

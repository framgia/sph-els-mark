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

  @Post('admin/register')
  async register(@Body() body: AdminRegisterDto) {
    const { password_confirm, ...data } = body;
    if (body.password !== body.password_confirm) {
      throw new BadRequestException('Password do not match');
    }

    const hashed = await bcrypt.hash(body.password, 12);
    return this.userService.save({
      ...data,
      password: hashed,
      is_admin: true,
    });
  }
}

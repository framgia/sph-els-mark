import {
  Controller,
  Get,
  UseGuards,
  NotFoundException,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Get('/admin')
  async admin() {
    return this.userService.find({
      where: {
        is_admin: true,
      },
    });
  }
  @UseGuards(AuthGuard)
  @Get('admin/user-lists')
  async getRegisteredStudents(@Req() request: Request) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);
    const user = this.userService.findOne({ where: { user_id } });
    const admin = await this.userService.findOne({
      where: { is_admin: false },
    });

    if (!admin && !user) {
      throw new NotFoundException('Forbidden Resource');
    } 
    const students = await this.userService.find({
      where: { is_admin: false },
    });
    return students;
  }
}

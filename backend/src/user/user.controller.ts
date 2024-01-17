import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
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
  async getRegisteredStudents() {
    return await this.userService.find({
      where: { is_admin: false },
    });
  }
}

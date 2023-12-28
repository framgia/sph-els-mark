import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
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

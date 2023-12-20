import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Request } from 'supertest';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async user(request: Request) {
    const cookie = request.cookies['jwt'];

    const { user_id } = await this.jwtService.verifyAsync(cookie);

    return this.userService.findOne({ where: { user_id } });
  }
}

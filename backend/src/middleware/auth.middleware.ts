import { UserService } from '@/user/user.service';
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private jwt: JwtService,
    private userService: UserService
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const cookie = req.cookies['jwt'];
    if (!cookie) {
      throw new UnauthorizedException('Unathorized User');
    }
    const { id: user_id } = await this.jwt.verifyAsync(cookie);
    const user = await this.userService.findOne({ where: { user_id } });
    if (!user) {
      throw new UnauthorizedException('Unathorized User');
    }
    return next();
  }
}

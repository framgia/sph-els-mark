import { UserService } from '@/user/user.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private jwt: JwtService,
    private userService: UserService
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const cookie = req.cookies['jwt'];
    if (!cookie) {
      return res.status(401).json({ message: 'Unauthorized User' });
    }
    try {
      const { id: user_id } = await this.jwt.verifyAsync(cookie);
      await this.userService.findOne({ where: { user_id } });

      if (
        req.headers['cookie'] &&
        req.headers['cookie'].includes(`jwt=${cookie}`)
      ) {
        return next();
      }

      return res.status(401).json({ message: 'Unauthorized User' });
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid Token' });
    }
  }
}

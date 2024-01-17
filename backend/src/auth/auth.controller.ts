import {
  Controller,
  Post,
  Body,
  BadRequestException,
  NotFoundException,
  Res,
  Get,
  Req,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Put,
} from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';
import { Response, Request } from 'express';
import { AuthGuard } from './auth.guard';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  @Post(['student/register', 'admin/register'])
  async register(@Body() body: RegisterDto, @Req() request: Request) {
    if (body.password !== body.password_confirm) {
      throw new BadRequestException('Password do not match');
    }
    const userEmail = await this.userService.findOne({
      where: { email: body.email },
    });
    if (userEmail) {
      throw new BadRequestException('Email Already Exist');
    }
    const hashed = await bcrypt.hash(body.password, 12);

    return this.userService.save({
      ...body,
      password: hashed,
      is_admin: request.path === '/api/admin/register',
    });
  }

  @Post(['student/login', 'admin/login'])
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request
  ) {
    const user = await this.userService.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid Credentials');
    }

    const adminLogin = request.path === '/api/admin/login';

    const jwt = await this.jwtService.signAsync({
      id: user.user_id,
      scope: adminLogin ? 'student' : 'admin',
    });

    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'success',
    };
  }

  // For student users
  @UseGuards(AuthGuard)
  @Get('student/user')
  async studentUser(@Req() request: Request) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);
    return this.userService.findOne({ where: { user_id } });
  }

  // For admin users
  @UseGuards(AuthGuard)
  @Get('admin/user')
  async adminUser(@Req() request: Request) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);
    return this.userService.findOne({ where: { user_id } });
  }

  @UseGuards(AuthGuard)
  @Post(['student/logout', 'admin/logout'])
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'Logout Succesfully',
    };
  }

  @UseGuards(AuthGuard)
  @Put(['student/user/profile', 'admin/user/profile'])
  async editProfile(
    @Req() request: Request,
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string,
    @Body('email') email: string,
    @Body('avatar') avatar: string
  ) {
    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);

    await this.userService.update(user_id, {
      first_name,
      last_name,
      email,
      avatar,
    });

    return this.userService.findOne({ where: { user_id } });
  }

  @UseGuards(AuthGuard)
  @Put(['student/user/password', 'admin/user/password'])
  async changePassword(
    @Req() request: Request,
    @Body('password') password: string,
    @Body('password_confirm') password_confirm: string
  ) {
    if (password !== password_confirm) {
      throw new BadRequestException('Password do not match');
    }

    const cookie = request.cookies['jwt'];
    const { id: user_id } = await this.jwtService.verifyAsync(cookie);

    await this.userService.update(user_id, {
      password: await bcrypt.hash(password, 12),
    });

    return this.userService.findOne({ where: { user_id } });
  }
}

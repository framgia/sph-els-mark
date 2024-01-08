import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ 
    JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1d' },
  }),
  TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

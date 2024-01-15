import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@/user/user.module';
import { AuthModule } from '@/auth/auth.module';
import { FollowersModule } from '@/followers/followers.module';
import { CategoriesModule } from '@/categories/categories.module';
import { AnswerModule } from '@/answer/answer.module';
import { AttemptsModule } from '@/attempts/attempts.module';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { CategoriesController } from '@/categories/categories.controller';
import { UserController } from '@/user/user.controller';
import { AttemptsController } from '@/attempts/attempts.controller';
import { AnswerController } from '@/answer/answer.controller';
import { FollowersController } from './followers/followers.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'elearning',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    FollowersModule,
    CategoriesModule,
    AnswerModule,
    AttemptsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        CategoriesController,
        UserController,
        AttemptsController,
        AnswerController,
        FollowersController
      );
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FollowersModule } from './followers/followers.module';
import { CategoriesModule } from './categories/categories.module';
import { AnswerModule } from './answer/answer.module';
import { AttemptsModule } from './attempts/attempts.module';

@Module({
  imports: [
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
export class AppModule {}

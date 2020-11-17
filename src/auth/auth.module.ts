import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/users/users.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions:{
        expiresIn: 18000,
      }
    })
],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UsersService],
})
export class UsersModule {}

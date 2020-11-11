import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private UserRepository: UserRepository,
    ){}
}

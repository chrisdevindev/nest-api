import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UserRole } from 'src/users/user-roles.enum';
import { User } from 'src/users/user.entity';
import { UserRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    async signUp(createUserDto: CreateUserDto): Promise<User>{
        if(createUserDto.password != createUserDto.passwordConfirmation){
            throw new UnprocessableEntityException('As senhas não conferem!')
        }else{
            return await this.userRepository.createUser(createUserDto, UserRole.USER)
        }
    }
}

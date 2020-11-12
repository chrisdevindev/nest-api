import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto'
import { UsersService } from './users.service'
import { ReturnUserDto } from './dtos/return-user.dto'

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService){}

    @Post()
    async createAdminUser(
        @Body() CreateUserDto: CreateUserDto
    ): Promise<ReturnUserDto>{
        const user = await this.usersService.createAdminUser(CreateUserDto)
        return{
            user,
            message: 'Administrador cadastrado com sucesso'
        }
    }
}


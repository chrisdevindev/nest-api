import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    async signUp(
        @Body(ValidationPipe) createUserDto: CreateUserDto): Promise<{ message: string }> {
        await this.authService.signUp(createUserDto)
        return {
            message: 'Cadastro realizado com sucesso!'
        }
    }
}


import { 
    IsEmail,
    IsNotEmpty,
    MaxLength,
    MinLength
} from "class-validator"
export class CreateUserDto{

    /* Validação do email*/
    @IsNotEmpty({
        message: 'Informe um endereço de email',
    })
    @IsEmail({}, {
        message: 'Informe um endereço de email válido',
    })
    @MaxLength(200, {
        message: 'O endereço de email deve ter menos de 200 caracteres',
    })
    email: string 


    /* Validação do nome de usuário*/
    @IsNotEmpty({
        message: 'Informe o nome do usuário',
    })
    @MaxLength(200,{
        message: 'O nome deve ter menos de 200 caracteres',
    })
    name: string


    /* Validação da senha*/
    @IsNotEmpty({
        message: 'Informe uma senha',
    })
    @MinLength(6, {
        message: 'A senha deve ter no mínimo 6 caracteres',
    })
    password: string


    /* Validação da confirmação de senha*/
    @IsNotEmpty({
        message: 'Informe a confirmação da senha',
    })
    @MinLength(6,{
        message: 'A confirmação da senha deve ter no mínimo 6 caracteres',
    })
    passwordConfirmation: string
}
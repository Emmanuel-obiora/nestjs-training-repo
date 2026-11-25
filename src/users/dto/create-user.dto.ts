import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsEmail()
    email: string;

    @IsEnum(['Intern', 'Engineer', 'Admin'], {
        message: "A valid role is required"
    })
    role: 'Intern' | 'Engineer' | 'Admin'
}
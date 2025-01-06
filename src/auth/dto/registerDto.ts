import {IsEmail, IsNotEmpty, IsString, MinLength} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {RoleUser} from "../../user/user.interface";

export class RegisterDto{
    @IsString()
    @ApiProperty({
        description:'Full name',
        required:true
    })
    fullName:string

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description:'Email',
        required:true

    })
    email:string

    @IsString()
    @MinLength(6)
    @ApiProperty({
        description:'Password',
        required:true
    })
    password:string

    @IsString()
    @ApiProperty({
        description:'Roles',
        required:true
    })
    role:RoleUser
}
import {IsEmail, IsNotEmpty, IsString, MinLength} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {RoleUser} from "../../user/user.interface";
import {IsDateString, IsPhoneNumber} from "class-validator";

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

    @IsString()
    @ApiProperty({
        description:'User image',
        required:true

    })
    image: string

    @IsDateString()
    @ApiProperty({
        description:"Userni tug'ilgan kuni",
        required:true

    })
    birthday: Date

    @IsString()
    @ApiProperty({
        description:'User jinsi',
        required:true

    })
    gender: string

    @IsPhoneNumber("UZ")
    @ApiProperty({
        description:'User telefon raqami',
        required:true

    })
    phone: string
}
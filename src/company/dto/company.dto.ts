import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {IsDateString, IsPhoneNumber} from "class-validator";

export class CompanyDto{
    @IsString()
    @ApiProperty({
        description:'Company nomi',
        required:true

    })
    name: string

    @IsPhoneNumber("UZ")
    @ApiProperty({
        description:'Company telefon raqami',
        required:true

    })
    phone: string

    @IsNumber()
    @ApiProperty({
        description:'Company ishchilar soni',
        required:true

    })
    staffCount: number

    @IsDateString()
    @ApiProperty({
        description:'Companiya dostup berish',
        required:true

    })
    expiredDate: Date

    @IsString()
    @ApiProperty({
        description:'Company image',
        required:true

    })
    image: string

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
        description:'User image',
        required:true

    })
    imageUser: string

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
    phoneUser: string
}
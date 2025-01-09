import {IsDate, IsNumber, IsString} from "@nestjs/class-validator";
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
        description:'Company ishchilar soni',
        required:true

    })
    image: string
}
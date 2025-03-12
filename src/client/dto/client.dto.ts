import {IsString} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {IsPhoneNumber} from "class-validator";

export class ClientDto {
    @IsString()
    @ApiProperty({
        description: 'Client first name',
        required: true
    })
    first_name: string

    @IsString()
    @ApiProperty({
        description: 'Client last name',
        required: true
    })
    last_name: string

    @IsPhoneNumber("UZ")
    @ApiProperty({
        description: 'Client phone number',
        required: true

    })
    phone: string

}
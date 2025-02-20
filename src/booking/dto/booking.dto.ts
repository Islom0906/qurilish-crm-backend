import {IsNumber, IsString} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {IsEnum} from "class-validator";

export class BookingDto {
    @ApiProperty({
        description: 'Booking kuni',
        required: true,
        enum: ['free', 'paid']

    })
    @IsString()
    @IsEnum(['free', 'paid'],{message:"You enter only paid or free"})
    type: string

    @ApiProperty({
        description: 'Booking kuni',
        required: true

    })
    @IsNumber()
    days: number

    @ApiProperty({
        description: 'Booking narxi',
        required: true

    })
    @IsNumber()
    price: number


}
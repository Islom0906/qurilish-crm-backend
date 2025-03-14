import {IsNumber} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CurrencyDto {


    @ApiProperty({
        description: 'Currency kuni',
        required: true

    })
    @IsNumber()
    dollar: number


}
import {IsString} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {IsDateString} from "class-validator";

export class SlotDto {
    @IsString()
    @ApiProperty({
        description:'Slot nomi',
        required:true

    })
    name: string


    @IsDateString()
    @ApiProperty({
        description:'Slot tugash vaqti',
        required:true

    })
    finishedDate: Date

    @IsString()
    @ApiProperty({
        description:'Slot soni',
        required:true

    })
    image: string


}
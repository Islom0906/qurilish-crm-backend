import {IsString} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsDateString, IsMongoId} from "class-validator";

export class SlotDto {
    @ApiProperty({
        description:'Slot nomi',
        required:true

    })
    @IsString()
    name: string


    @ApiProperty({
        description:'Slot tugash vaqti',
        required:true

    })
    @IsDateString()
    @IsDate()
    finishedDate: Date

    @ApiProperty({
        description:'Slot image',
    })
    @IsString()
    @IsMongoId()
    image: string


}
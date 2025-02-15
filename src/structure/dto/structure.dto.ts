import {ApiProperty} from "@nestjs/swagger";
import {ArrayNotEmpty, IsArray, IsMongoId, IsString} from "class-validator";
import {IsNumber} from "@nestjs/class-validator";

export class StructureDto {
    @ApiProperty({
        description: 'Name of the structure',
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Home size',
        required: true,
    })
    @IsNumber()
    size: number;

    @ApiProperty({
        description: 'Room count',
        required: true,
    })
    @IsNumber()
    roomCount: string;

    @ApiProperty({
        description: 'Image file ID',
        type:[String],
        required: true,
    })
    @IsArray()
    @ArrayNotEmpty()
    @IsMongoId({each:true})
    images: string[];

    @ApiProperty({
        description: 'Floor image',
        required: true,
    })
    @IsMongoId()
    floorImage: string;

    @ApiProperty({
        description: 'Apartment image',
        required: true,
    })
    @IsMongoId()
    apartmentImage: string;


}
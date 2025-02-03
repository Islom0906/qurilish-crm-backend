import {ApiProperty} from "@nestjs/swagger";
import {IsMongoId, IsOptional, IsString} from "class-validator";
import {IsNumber} from "@nestjs/class-validator";

export class ApartmentDto {
    @ApiProperty({
        description: 'Name of the apartment',
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Price required',
        required: true,
        type:Number
    })
    @IsNumber()
    @IsOptional()
    price?: string;

    @ApiProperty({
        description: 'Floor ID',
        required: true,
    })
    @IsMongoId()
    floorId: string;

    @ApiProperty({
        description: 'Slot ID',
        required: true,
    })
    @IsMongoId()
    slotId: string;

    @ApiProperty({
        description: 'House ID',
        required: true,
    })
    @IsMongoId()
    houseId: string;

    @ApiProperty({
        description: 'Structure ID',
        required: true,
    })
    @IsMongoId()
    structureId: string;
}
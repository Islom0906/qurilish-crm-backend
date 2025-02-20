import {ApiProperty} from "@nestjs/swagger";
import {ArrayNotEmpty, IsArray, IsBoolean, IsMongoId, IsOptional, IsString} from "class-validator";
import {CompanyAndIsDeleteInterface} from "../../utils/companyAndIsDelete.interface";
import {IsNumber} from "@nestjs/class-validator";
import {Types} from "mongoose";

export class FloorDto {
    @ApiProperty({
        description: 'Name of the floor',
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Is sale floor',
        required: true,
    })
    @IsBoolean()
    isSale: boolean;

    @ApiProperty({
        description: 'Is sale floor',
        required: true,
        nullable:true
    })
    @IsOptional()
    @IsNumber()
    priceSqm: number;

    @ApiProperty({
        description: 'Image file ID',
        required: true,
    })
    @IsMongoId()
    image: string;

    @ApiProperty({
        description: 'Slot ID associated with the house',
        required: true,
    })
    @IsMongoId()
    houseId: string;
}


export class FilterFloorDto extends CompanyAndIsDeleteInterface{
    houseId?:Types.ObjectId
}

export class FloorEditPriceDto{
    @ApiProperty({
        description: 'Floors IDs',
        type:[String],
        required: true,
    })
    @IsArray()
    @ArrayNotEmpty()
    @IsMongoId({each:true})
    floors: string[];

    @ApiProperty({
        description: 'Price',
        required: true,

    })
    @IsNumber()
    price:number
}
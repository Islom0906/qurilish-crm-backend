import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsNotEmpty, IsMongoId, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {CompanyAndIsDeleteInterface} from "../../utils/companyAndIsDelete.interface";


export class HouseDto {
    @ApiProperty({
        description: 'Name of the house',
        required: true,
    })
    @IsString()
    name: string;

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
    slotId: string;






}

export class FilterHouseDto extends CompanyAndIsDeleteInterface{
    slotId?:string
}

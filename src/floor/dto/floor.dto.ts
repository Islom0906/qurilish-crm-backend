import {ApiProperty} from "@nestjs/swagger";
import { IsBoolean, IsMongoId, IsString} from "class-validator";
import {CompanyAndIsDeleteInterface} from "../../utils/companyAndIsDelete.interface";

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


export class FilterDto extends CompanyAndIsDeleteInterface{
    houseId?:string
}
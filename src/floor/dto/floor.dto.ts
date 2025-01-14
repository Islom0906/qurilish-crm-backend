import {ApiProperty} from "@nestjs/swagger";
import {IsArray, IsBoolean, IsMongoId, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {SquarePricesDto} from "../../house/dto/house.dto";

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
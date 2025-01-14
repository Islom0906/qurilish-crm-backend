import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsArray, IsNotEmpty, IsMongoId, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class SquarePricesDto {
    @ApiProperty({
        description: 'Starting floor number',
        required: true,
    })
    @IsNotEmpty()
    startFloor: number;

    @ApiProperty({
        description: 'Ending floor number',
        required: true,
    })
    @IsNotEmpty()
    endFloor: number;

    @ApiProperty({
        description: 'Price per square unit',
        required: true,
    })
    @IsString()
    price: string;
}

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



    @ApiProperty({
        description: 'Array of square price ranges for the house',
        type: [SquarePricesDto],
        required: true,
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SquarePricesDto)
    squarePrices: SquarePricesDto[];


}

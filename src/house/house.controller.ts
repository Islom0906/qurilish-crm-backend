import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {HouseService} from "./house.service";
import {Auth} from "../auth/decorators/auth.decorator";
import { UserInfo} from "../user/decorators/user.decorator";
import {HouseDto} from "./dto/house.dto";

@ApiBearerAuth()
@ApiTags('House')
@Controller('house')
export class HouseController {
    constructor(private readonly houseService:HouseService) {
    }

//  GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get house"})
    @ApiQuery({ name: 'slotId', required: false, description: 'House filter with slot' })
    async getHouse(@UserInfo("_id") userId:string,@Query("slotId") slotId:string) {
        return this.houseService.getHouse(userId,slotId)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id house"})
    async getByIdHouse(@Param('id') id: string) {
        return this.houseService.getByIdHouse(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "House api"})
    @ApiCreatedResponse({
        description: "House yaratish",
        type: HouseDto
    })
    async creatHouse(@Body() dto: HouseDto,@UserInfo("_id") userId:string) {
        return this.houseService.creatHouse(dto,userId)
    }

    // PUT SLOT
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "House api"})
    @ApiCreatedResponse({
        description: "House o'zgartirish",
        type: HouseDto
    })
    async updateHouse(@Param('id') id: string, @Body() dto: HouseDto,@UserInfo("_id") userId:string) {
        return this.houseService.updateHouse(id, dto,userId)
    }


    // DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("admin")
    @ApiOperation({summary: "House api"})
    @ApiCreatedResponse({
        description: "House o'chirish",
    })
    async deleteHouse(@Param('id') id: string) {
        return this.houseService.deleteHouse(id)
    }


}

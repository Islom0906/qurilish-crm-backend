import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {FloorService} from "./floor.service";
import {Auth} from "../auth/decorators/auth.decorator";
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {FloorDto} from "./dto/floor.dto";
import { UserInfo} from "../user/decorators/user.decorator";


@ApiBearerAuth()
@ApiTags('Floor')
@Controller('floor')
export class FloorController {
    constructor(private readonly floorService: FloorService) {
    }

    //  GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get floor"})
    @ApiQuery({ name: 'houseId', required: false, description: 'House filter with slot' })
    async getFloor(@UserInfo("_id") userId: string, @Query("houseId") houseId:string) {
        return this.floorService.getFloor(userId,houseId)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id floor"})
    async getByIdFloor(@Param('id') id: string) {
        return this.floorService.getByIdFloor(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Floor api"})
    @ApiCreatedResponse({
        description: "Floor yaratish",
        type: FloorDto
    })
    async creatFloor(@Body() dto: FloorDto,@UserInfo("_id") userId: string) {
        return this.floorService.creatFloor(dto, userId)
    }

    // PUT SLOT
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "Floor api"})
    @ApiCreatedResponse({
        description: "Floor o'zgartirish",
        type: FloorDto
    })
    async updateFloor(@Param('id') id: string, @Body() dto: FloorDto,@UserInfo("_id") userId:string) {
        return this.floorService.updateFloor(id, dto, userId)
    }


    // DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("admin")
    @ApiOperation({summary: "Floor api"})
    @ApiCreatedResponse({
        description: "Floor o'chirish",
    })
    async deleteFloor(@Param('id') id: string) {
        return this.floorService.deleteFloor(id)
    }

}

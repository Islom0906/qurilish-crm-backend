import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {FloorService} from "./floor.service";
import {Auth} from "../auth/decorators/auth.decorator";
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {FloorDto, FloorEditPriceDto} from "./dto/floor.dto";
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
    @ApiQuery({ name: 'houseId', required: false, description: 'Floor filter with houseId' })
    @ApiQuery({ name: 'limit', required: false, description: 'Floor pagination page size',default:'10' })
    @ApiQuery({ name: 'page', required: false, description: 'Floor pagination page number',default:'1' })

    async getFloor(
        @UserInfo("_id") userId: string,
        @Query("houseId") houseId:string,
        @Query('limit') limit:string='10',
        @Query('page') page:string='1',
    ) {
        return this.floorService.getFloor(userId,houseId,limit,page)
    }

    // GET
    @HttpCode(200)
    @Get('/shaxmat')
    @Auth("admin")
    @ApiOperation({summary: "Get floor shaxmat"})
    async getFloorShaxmat(
        @UserInfo("_id") userId: string,
    ) {
        return this.floorService.getFloorShaxmat(userId)
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

    // EDIT Floor price
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post("/editPrice")
    @Auth("admin")
    @ApiOperation({summary: "Floor narx o'zgartirish api"})
    @ApiCreatedResponse({
        description: "Floor narx o'zgartirish ",
        type: FloorEditPriceDto
    })
    async editFloorPrice(@Body() dto: FloorEditPriceDto,@UserInfo("_id") userId: string) {
        return this.floorService.editFloorPrice(dto, userId)
    }

    // PUT Floor
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

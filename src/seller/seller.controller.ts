import {Body, Controller, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {SellerService} from "./seller.service";
import {Auth} from "../auth/decorators/auth.decorator";
import {UserInfo} from "../user/decorators/user.decorator";
import {SellerDto} from "./dto/seller.dto";

@ApiBearerAuth()
@ApiTags('Seller')
@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService) {
    }

    // GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get seller"})
    @ApiQuery({name: 'limit', required: false, description: 'House pagination page size', default: '10'})
    @ApiQuery({name: 'page', required: false, description: 'House pagination page number', default: '1'})
    async getSeller(
        @UserInfo("_id") userId: string,
        @Query('limit') limit: string = '10',
        @Query('page') page: string = '1',
    ) {
        return this.sellerService.getSeller(userId, limit, page)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id seller"})
    async getByIdSeller(@Param('id') id: string) {
        return this.sellerService.getByIdSeller(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Seller api"})
    @ApiCreatedResponse({
        description: "Seller yaratish",
        type: SellerDto
    })
    async creatSeller(@Body() dto: SellerDto, @UserInfo("_id") userId: string) {
        return this.sellerService.creatSeller(dto, userId)
    }

    // PUT House
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "Seller api"})
    @ApiCreatedResponse({
        description: "Seller o'zgartirish",
        type: SellerDto
    })
    async updateSeller(@Param('id') id: string, @Body() dto: SellerDto, @UserInfo("_id") userId: string) {
        return this.sellerService.updateSeller(id, dto, userId)
    }

// // DELETE
//     @HttpCode(200)
//     @Delete(':id')
//     @Auth("admin")
//     @ApiOperation({summary: "Seller api"})
//     @ApiCreatedResponse({
//         description: "Seller o'chirish",
//     })
//     async deleteSeller(@Param('id') id: string) {
//         return this.sellerService.deleteSeller(id)
//     }

}

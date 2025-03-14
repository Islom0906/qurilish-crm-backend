import {Body, Controller, Get, HttpCode, Post, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {CurrencyService} from "./currency.service";
import {Auth} from "../auth/decorators/auth.decorator";
import {UserInfo} from "../user/decorators/user.decorator";
import {BookingDto} from "../booking/dto/booking.dto";
import {CurrencyDto} from "./dto/currency.dto";


@ApiBearerAuth()
@ApiTags('Currency')
@Controller('currency')
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) {
    }

    // GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get currency"})
    @ApiQuery({name: 'limit', required: false, description: 'Currency pagination page size', default: '10'})
    @ApiQuery({name: 'page', required: false, description: 'Currency pagination page number', default: '1'})
    async getCurrency(
        @UserInfo("_id") userId: string,
        @Query('limit') limit: string = '10',
        @Query('page') page: string = '1'
    ) {
        return this.currencyService.getCurrency(userId, limit, page)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Currency api"})
    @ApiCreatedResponse({
        description: "Currency yaratish",
        type: CurrencyDto
    })
    async creatCurrency(@Body() dto: CurrencyDto, @UserInfo("_id") userId: string) {
        return this.currencyService.creatCurrency(dto, userId)
    }
}

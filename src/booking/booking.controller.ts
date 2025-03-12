import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {BookingService} from "./booking.service";
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {Auth} from "../auth/decorators/auth.decorator";
import {UserInfo} from "../user/decorators/user.decorator";
import {BookingDto} from "./dto/booking.dto";

@ApiBearerAuth()
@ApiTags('Booking')
@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) {
    }

    // GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get booking"})
    async getBooking(@UserInfo("_id") userId: string) {
        return this.bookingService.getBooking(userId)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id booking"})
    async getByIdBooking(@Param('id') id: string) {
        return this.bookingService.getByIdBooking(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Booking api"})
    @ApiCreatedResponse({
        description: "Booking yaratish",
        type: BookingDto
    })
    async creatBooking(@Body() dto: BookingDto, @UserInfo("_id") userId: string) {
        return this.bookingService.creatBooking(dto, userId)
    }

    // PUT SLOT
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "Booking api"})
    @ApiCreatedResponse({
        description: "Booking o'zgartirish",
        type: BookingDto
    })
    async updateBooking(@Param('id') id: string, @Body() dto: BookingDto, @UserInfo("_id") userId: string) {
        return this.bookingService.updateBooking(id, dto, userId)
    }

    // DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("admin")
    @ApiOperation({summary: "Booking api"})
    @ApiCreatedResponse({
        description: "Booking o'chirish",
    })
    async deleteBooking(@Param('id') id: string) {
        return this.bookingService.deleteBooking(id)
    }
}

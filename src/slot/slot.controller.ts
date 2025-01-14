import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {SlotService} from "./slot.service";
import {Auth} from "../auth/decorators/auth.decorator";
import {SlotDto} from "./dto/slot.dto";
import { UserInfo} from "../user/decorators/user.decorator";


@ApiBearerAuth()
@ApiTags('Slot')
@Controller('slot')
export class SlotController {
    constructor(private readonly slotService:SlotService) {
    }

    // GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get slot"})
    async getSlot(@UserInfo("_id") userId:string) {
        return this.slotService.getSlot(userId)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id slot"})
    async getByIdSlot(@Param('id') id: string) {
        return this.slotService.getByIdSlot(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Slot api"})
    @ApiCreatedResponse({
        description: "Slot yaratish",
        type: SlotDto
    })
    async creatSlot(@Body() dto: SlotDto, @UserInfo("_id") userId:string) {
        return this.slotService.creatSlot(dto,userId)
    }

    // PUT SLOT
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "Slot api"})
    @ApiCreatedResponse({
        description: "Slot o'zgartirish",
        type: SlotDto
    })
    async updateSlot(@Param('id') id: string, @Body() dto: SlotDto, @UserInfo("_id") userId:string) {
        return this.slotService.updateSlot(id, dto,userId)
    }


    // DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("admin")
    @ApiOperation({summary: "Slot api"})
    @ApiCreatedResponse({
        description: "Slot o'chirish",
    })
    async deleteSlot(@Param('id') id: string) {
        return this.slotService.deleteSlot(id)
    }

}

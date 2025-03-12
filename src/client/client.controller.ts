import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {ClientService} from "./client.service";
import {UserInfo} from "../user/decorators/user.decorator";
import {Auth} from "../auth/decorators/auth.decorator";
import {ClientDto} from "./dto/client.dto";

@ApiBearerAuth()
@ApiTags('Client')
@Controller('client')
export class ClientController {
    constructor(private readonly clientService:ClientService) {
    }

    // GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get clients"})
    async getClient(@UserInfo("_id") userId: string) {
        return this.clientService.getClient(userId)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id client"})
    async getByIdClient(@Param('id') id: string) {
        return this.clientService.getByIdClient(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Client api"})
    @ApiCreatedResponse({
        description: "Client yaratish",
        type: ClientDto
    })
    async creatClient(@Body() dto: ClientDto, @UserInfo("_id") userId: string) {
        return this.clientService.creatClient(dto, userId)
    }

    // PUT SLOT
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "Client api"})
    @ApiCreatedResponse({
        description: "Client o'zgartirish",
        type: ClientDto
    })
    async updateClient(@Param('id') id: string, @Body() dto: ClientDto, @UserInfo("_id") userId: string) {
        return this.clientService.updateClient(id, dto, userId)
    }

    // DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("admin")
    @ApiOperation({summary: "Client api"})
    @ApiCreatedResponse({
        description: "Client o'chirish",
    })
    async deleteClient(@Param('id') id: string) {
        return this.clientService.deleteClient(id)
    }
}

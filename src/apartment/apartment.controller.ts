import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {ApartmentService} from "./apartment.service";
import {UserInfo} from "../user/decorators/user.decorator";
import {Auth} from "../auth/decorators/auth.decorator";
import {ApartmentDto} from "./dto/apartment.dto";

@ApiBearerAuth()
@ApiTags('Apartment')
@Controller('apartment')
export class ApartmentController {
    constructor(private readonly apartmentService:ApartmentService) {}

    // GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get apartment"})
    @ApiQuery({ name: 'limit', required: false, description: 'Apartment pagination page size',default:'10' })
    @ApiQuery({ name: 'page', required: false, description: 'Apartment pagination page number',default:'1' })
    async getApartment(
        @UserInfo("_id") userId:string,
        @Query('limit') limit:string='10',
        @Query('page') page:string='1',
    ) {
        return this.apartmentService.getApartment(userId,limit,page)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id apartment"})
    async getByIdApartment(@Param('id') id: string) {
        return this.apartmentService.getByIdApartment(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Apartment api"})
    @ApiCreatedResponse({
        description: "Apartment yaratish",
        type: ApartmentDto
    })
    async creatApartment(@Body() dto: ApartmentDto,@UserInfo("_id") userId:string) {
        return this.apartmentService.creatApartment(dto,userId)
    }

    // PUT
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "Apartment api"})
    @ApiCreatedResponse({
        description: "Apartment o'zgartirish",
        type: ApartmentDto
    })
    async updateApartment(@Param('id') id: string, @Body() dto: ApartmentDto,@UserInfo("_id") userId:string) {
        return this.apartmentService.updateApartment(id, dto,userId)
    }

    // DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("admin")
    @ApiOperation({summary: "Apartment api"})
    @ApiCreatedResponse({
        description: "Apartment o'chirish",
    })
    async deleteApartment(@Param('id') id: string) {
        return this.apartmentService.deleteApartment(id)
    }
}

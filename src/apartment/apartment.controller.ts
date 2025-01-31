import {Controller, Get, HttpCode, Query} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {ApartmentService} from "./apartment.service";
import {UserInfo} from "../user/decorators/user.decorator";
import {Auth} from "../auth/decorators/auth.decorator";

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
}

import {Body, Controller, Delete, Get, HttpCode, Param, Post, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {CompanyService} from "./company.service";
import {Auth} from "../auth/decorators/auth.decorator";
import {CompanyDto} from "./dto/company.dto";


@ApiBearerAuth()
@ApiTags('Company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {
    }


    //GET COMPANY
    @HttpCode(200)
    @Get()
    @Auth("superAdmin")
    @ApiOperation({summary: "Get company"})
    @ApiQuery({name: 'limit', required: false, description: 'Company pagination page size', default: '10'})
    @ApiQuery({name: 'page', required: false, description: 'Company pagination page number', default: '1'})
    async getCompany(
        @Query('limit') limit: string = '10',
        @Query('page') page: string = '1'
    ) {
        return this.companyService.getCompany(limit,page)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("superAdmin")
    @ApiOperation({summary: "Company api"})
    @ApiCreatedResponse({
        description: "Company yaratish",
        type: CompanyDto
    })
    async creatCompany(@Body() dto: CompanyDto) {
        return this.companyService.creatCompany(dto)
    }

    // PUT
    // @UsePipes(new ValidationPipe())
    // @HttpCode(200)
    // @Put(':id')
    // @Auth("superAdmin")
    // @ApiOperation({summary: "Company api"})
    // @ApiCreatedResponse({
    //     description: "Company o'zgartirish",
    //     type: CompanyDto
    // })
    // async updateCompany(@Param('id') id: string, @Body() dto: CompanyDto) {
    //     return this.companyService.updateCompany(id, dto)
    // }

//     DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("superAdmin")
    @ApiOperation({summary: "Company api"})
    @ApiCreatedResponse({
        description: "Company o'chirish",
    })
    async deleteCompany(@Param('id') id: string) {
        return this.companyService.deleteCompany(id)
    }


}

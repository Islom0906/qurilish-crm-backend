import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
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
    async getCompany() {
        return this.companyService.getCompany()
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

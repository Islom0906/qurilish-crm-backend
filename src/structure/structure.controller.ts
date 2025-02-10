import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put, Query,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {Auth} from "../auth/decorators/auth.decorator";
import {UserInfo} from "../user/decorators/user.decorator";
import {StructureService} from "./structure.service";
import {StructureDto} from "./dto/structure.dto";

@ApiBearerAuth()
@ApiTags('Structure')
@Controller('structure')
export class StructureController {
constructor(private readonly structureService:StructureService) {
}

    // GET
    @HttpCode(200)
    @Get()
    @Auth("admin")
    @ApiOperation({summary: "Get structure"})
    @ApiQuery({ name: 'limit', required: false, description: 'House pagination page size',default:'10' })
    @ApiQuery({ name: 'page', required: false, description: 'House pagination page number',default:'1' })
    async getStructure(
        @UserInfo("_id") userId:string,
        @Query('limit') limit:string='10',
        @Query('page') page:string='1',
    ) {
        return this.structureService.getStructure(userId,limit,page)
    }

    // GET BY ID
    @HttpCode(200)
    @Get(":id")
    @Auth("admin")
    @ApiOperation({summary: "Get by id structure"})
    async getByIdStructure(@Param('id') id: string) {
        return this.structureService.getByIdStructure(id)
    }

    // POST
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth("admin")
    @ApiOperation({summary: "Structure api"})
    @ApiCreatedResponse({
        description: "Structure yaratish",
        type: StructureDto
    })
    async creatStructure(@Body() dto: StructureDto,@UserInfo("_id") userId:string) {
        return this.structureService.creatStructure(dto,userId)
    }

    // PUT
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth("admin")
    @ApiOperation({summary: "Structure api"})
    @ApiCreatedResponse({
        description: "Structure o'zgartirish",
        type: StructureDto
    })
    async updateStructure(@Param('id') id: string, @Body() dto: StructureDto,@UserInfo("_id") userId:string) {
        return this.structureService.updateStructure(id, dto,userId)
    }

    // DELETE
    @HttpCode(200)
    @Delete(':id')
    @Auth("admin")
    @ApiOperation({summary: "Structure api"})
    @ApiCreatedResponse({
        description: "Structure o'chirish",
    })
    async deleteStructure(@Param('id') id: string) {
        return this.structureService.deleteStructure(id)
    }

}

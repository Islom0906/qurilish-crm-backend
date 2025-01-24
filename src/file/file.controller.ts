import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors
} from '@nestjs/common';
import {FileService} from "./file.service";
import {AnyFilesInterceptor, FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {ApiBearerAuth, ApiBody, ApiConsumes, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {FileDto} from "./dto/file.dto";
import {Auth} from "../auth/decorators/auth.decorator";
import {DeleteFilesDto} from "./dto/deleteFiles.dto";

@ApiBearerAuth()
@ApiTags('Media')
@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService) {}
    // GET

    @HttpCode(200)
    @Get('medias')
    @Auth("superAdmin")
    @ApiOperation({summary: "Get media"})
    async getMedia(){
        return this.fileService.getMedia()
    }

    // POST
    @Post('medias')
    @HttpCode(201)
    @UseInterceptors(FilesInterceptor('media',10))
    @ApiOperation({summary: "Media yuklash"})
    @ApiCreatedResponse({
        description: "Media yuklash",
        type: FileDto
    })
    @Auth()
    @ApiConsumes('multipart/form-data')  // This is required for file uploads
    @ApiBody({
        description: 'Media file to upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                media: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary', // Specifies binary file input
                    },
                },
            },
        },
    })
    async uploadFile(@UploadedFiles() media:Array<Express.Multer.File>){
        return this.fileService.uploadFile(media)
    }

    @Delete('medias')
    @Auth("superAdmin")
    @ApiOperation({summary: "Media yuklash"})
    @ApiCreatedResponse({
        description: "Media yuklash",
        type: DeleteFilesDto
    })
    async deleteFiles(@Body() dto:DeleteFilesDto){
        return this.fileService.deleteFiles(dto)
    }
}

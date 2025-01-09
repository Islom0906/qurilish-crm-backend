import {Controller, HttpCode, Post, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FileService} from "./file.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiBearerAuth, ApiBody, ApiConsumes, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {FileDto} from "./dto/file.dto";

@ApiBearerAuth()
@ApiTags('Media')
@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService) {}

    @Post('medias')
    @HttpCode(201)
    @UseInterceptors(FileInterceptor('media'))
    @ApiOperation({summary: "Media yuklash"})
    @ApiCreatedResponse({
        description: "Media yuklash",
        type: FileDto
    })
    @ApiConsumes('multipart/form-data')  // This is required for file uploads
    @ApiBody({
        description: 'Media file to upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                media: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    async uploadFile(@UploadedFile() media:Express.Multer.File){
        return this.fileService.uploadFile(media)
    }
}

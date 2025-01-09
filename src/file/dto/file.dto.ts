import {ApiProperty} from "@nestjs/swagger";

export class FileDto{
    @ApiProperty({
        description: 'Media yuklash',
        format: 'binary',
    })
    media:Express.Multer.File
}
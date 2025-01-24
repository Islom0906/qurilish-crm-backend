import {ApiProperty} from "@nestjs/swagger";

export class FileDto{
    @ApiProperty({
        type: 'array',
        description: 'Media yuklash',
        items: {
        format: 'binary',
        },
    })
    media: Array<Express.Multer.File>
}
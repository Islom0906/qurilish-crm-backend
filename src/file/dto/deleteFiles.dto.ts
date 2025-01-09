import {ApiProperty} from "@nestjs/swagger";

export class DeleteFilesDto {
    @ApiProperty({
        description: 'Media yuklash',
        format: 'array',
    })
    ids:Array<string>
}
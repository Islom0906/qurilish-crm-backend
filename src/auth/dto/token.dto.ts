import {IsString} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class TokenDto{
    @IsString({message:'Refresh token vaqti tugagan yoki string emas'})
    @ApiProperty({
        description:'refresh token',
        required:true
    })
    refresh:string
}
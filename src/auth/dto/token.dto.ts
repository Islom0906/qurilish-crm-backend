import {IsString} from "@nestjs/class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class TokenDto{
    @IsString({message:'Refresh token vaqti tugagan yoki string emas'})
    @ApiProperty({
        description:'refreshToken',
        required:true
    })
    refreshToken:string
}
import {Controller, Get} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {Auth} from "../auth/decorators/auth.decorator";
import { UserInfo} from "./decorators/user.decorator";
import {UserService} from "./user.service";


@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly  userService:UserService) {
    }

    @Get('profile')
    @ApiOperation({summary: "User profile"})
    @ApiCreatedResponse({
        description: "User malumotlarini olish",
    })
    @Auth()
    async getProfile(@UserInfo("_id") id:string){
        return this.userService.byId(id)

    }
}

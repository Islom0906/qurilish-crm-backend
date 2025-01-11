import {Controller, Get} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {Auth} from "../auth/decorators/auth.decorator";
import {User} from "./decorators/user.decorator";
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
    @Auth("admin")
    async getProfile(@User("email") email:string){
        console.log(email)
        return this.userService.byId(email)

    }
}

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
    @Auth("Seller")
    async getProfile(@User("_id") _id:string){
        return this.userService.byId(_id)

    }
}

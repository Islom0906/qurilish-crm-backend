import {Body, Controller, HttpCode, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/registerDto";
import {LoginDto} from "./dto/login.dto";
import {ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {TokenDto} from "./dto/token.dto";

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    // REGISTER CONTROLLER
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post('register')
    @ApiOperation({summary: "Register api"})
    @ApiCreatedResponse({
        description: "Registerdan o'tish",
        type: RegisterDto
    })
    async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto)
    }

    // LOGIN CONTROLLER
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('login')
    @ApiOperation({summary: "Login api"})
    @ApiCreatedResponse({
        description: "Login",
        type: LoginDto
    })
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto)
    }

//NEW TOKEN
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('access')
    @ApiOperation({summary: "Get New Token"})
    @ApiCreatedResponse({
        description: "Get New Token",
        type: TokenDto
    })
    async getNewToken(@Body() dto:TokenDto){
        return this.authService.getNewToken(dto)
    }
}

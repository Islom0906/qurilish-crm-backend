import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/registerDto";
import { LoginDto } from "./dto/login.dto";
import { TokenDto } from "./dto/token.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        refresh: string;
        access: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            fullName: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        refresh: string;
        access: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            fullName: string;
        };
    }>;
    getNewToken(dto: TokenDto): Promise<{
        refresh: string;
        access: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            fullName: string;
        };
    }>;
}

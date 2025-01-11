import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/registerDto";
import { LoginDto } from "./dto/login.dto";
import { TokenDto } from "./dto/token.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getUsers(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../user/user.model").User> & import("../user/user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../user/user.model").User> & import("../user/user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    register(dto: RegisterDto): Promise<{
        refresh: string;
        access: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            name: string;
            sur_name: string;
            image: import("mongoose").Types.ObjectId;
            birthday: Date;
            gender: string;
            phone: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        refresh: string;
        access: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            name: string;
            sur_name: string;
            image: import("mongoose").Types.ObjectId;
            birthday: Date;
            gender: string;
            phone: string;
        };
    }>;
    getNewToken(dto: TokenDto): Promise<{
        refresh: string;
        access: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            name: string;
            sur_name: string;
            image: import("mongoose").Types.ObjectId;
            birthday: Date;
            gender: string;
            phone: string;
        };
    }>;
}

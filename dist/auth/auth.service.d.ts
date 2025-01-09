import { Model } from "mongoose";
import { UserDocument } from "../user/user.model";
import { RegisterDto } from "./dto/registerDto";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { TokenDto } from "./dto/token.dto";
export declare class AuthService {
    private userModel;
    private readonly jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
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
    getNewToken({ refresh }: TokenDto): Promise<{
        refresh: string;
        access: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            fullName: string;
        };
    }>;
    isExistUser(email: string): Promise<UserDocument>;
    issueTokenPair(userId: string): Promise<{
        refresh: string;
        access: string;
    }>;
    getUserField(user: UserDocument): {
        _id: import("mongoose").Types.ObjectId;
        email: string;
        fullName: string;
    };
}

import { RoleUser } from "../../user/user.interface";
export declare class RegisterDto {
    name: string;
    sur_name: string;
    email: string;
    password: string;
    role: RoleUser;
    image: string;
    birthday: Date;
    gender: string;
    phone: string;
}

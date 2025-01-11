import { HydratedDocument, Types } from 'mongoose';
import { RoleUser } from "./user.interface";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    fullName: string;
    email: string;
    password: string;
    role: RoleUser;
    companyId: Types.ObjectId | null;
    image: Types.ObjectId;
    birthday: Date;
    gender: string;
    phone: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

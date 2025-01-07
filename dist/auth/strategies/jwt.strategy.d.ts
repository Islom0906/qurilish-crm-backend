import { Strategy } from 'passport-jwt';
import { ConfigService } from "@nestjs/config";
import { User, UserDocument } from "../../user/user.model";
import { Model } from "mongoose";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private userModel;
    constructor(configService: ConfigService, userModel: Model<UserDocument>);
    validate({ _id }: Pick<UserDocument, '_id'>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
export {};

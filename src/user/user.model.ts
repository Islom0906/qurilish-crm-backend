
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {RoleUser} from "./user.interface";

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps:true})
export class User {
    @Prop({required:true})
    fullName:string;

    @Prop({unique:true,required:true})
    email:string;

    @Prop({required:true})
    password:string

    @Prop()
    role:RoleUser
}

export const UserSchema = SchemaFactory.createForClass(User);

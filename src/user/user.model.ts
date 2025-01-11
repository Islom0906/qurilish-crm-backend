
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
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

    @Prop({ type: Types.ObjectId, ref: 'Company',default:null})
    companyId:Types.ObjectId | null

    @Prop({ type: Types.ObjectId, ref: 'File',default:null})
    image:Types.ObjectId

    @Prop({required:true})
    birthday:Date

    @Prop({required:true})
    gender:string

    @Prop({required: true})
    phone: string
}

export const UserSchema = SchemaFactory.createForClass(User);

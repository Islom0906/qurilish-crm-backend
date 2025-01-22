import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
import {CompanyStatus} from "./company.interface";

export type CompanyDocument = HydratedDocument<Company>;

@Schema({timestamps: true})
export class Company {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    phone: string

    @Prop({required: true})
    staffCount: number

    @Prop({required: true})
    status: CompanyStatus

    @Prop({required: true})
    expiredDate: Date

    @Prop({required: true, type: Types.ObjectId, ref: 'File'})
    image: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'File'})
    logo: Types.ObjectId

    @Prop({required: true})
    isDelete: boolean
}

export const CompanySchema = SchemaFactory.createForClass(Company);

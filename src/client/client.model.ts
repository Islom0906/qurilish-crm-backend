import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema({timestamps: true})
export class Client {
    @Prop({required: true})
    first_name: string

    @Prop({required: true})
    last_name: string

    @Prop({required: true})
    phone: string

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId:Types.ObjectId

    @Prop({required: true})
    isDelete: boolean
}

export const ClientSchema = SchemaFactory.createForClass(Client);

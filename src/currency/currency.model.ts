import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type CurrencyDocument = HydratedDocument<Currency>;

@Schema({timestamps: true})
export class Currency {
    @Prop({required: true})
    dollar: number

    @Prop({required: true})
    status: boolean

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId:Types.ObjectId

    @Prop({required: true})
    isDelete: boolean
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);

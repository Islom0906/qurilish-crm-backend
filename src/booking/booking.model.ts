import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema({timestamps: true})
export class Booking {
    @Prop({required: true,enum:['free','paid']})
    type: string

    @Prop({required: true})
    days: number

    @Prop({required: true})
    price: number

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId:Types.ObjectId

    @Prop({required: true})
    isDelete: boolean
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type ApartmentDocument = HydratedDocument<Apartment>;



@Schema({timestamps: true})
export class Apartment {
    @Prop({required: true})
    name: string

    @Prop({default:null})
    price:number | null

    @Prop({required: true, type: Types.ObjectId, ref: 'Floor'})
    floorId: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'Slot'})
    slotId: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'House'})
    houseId: Types.ObjectId


    @Prop({required: true})
    isDelete: boolean

    @Prop({required: true, type: Types.ObjectId, ref: 'Structure'})
    structureId: Types.ObjectId

    @Prop({required:true,enum:['available','booked','bought']})
    status: string

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId: Types.ObjectId

    @Prop({default: null, type: Types.ObjectId, ref: 'House'})
    clientId: Types.ObjectId | null

    @Prop({default: null, type: Date})
    bookingExpiresAt: Date | null

    @Prop({default: null, type: Date})
    lastBookingDate: Date | null
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
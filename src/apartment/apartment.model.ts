import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
import {SquarePrices, SquarePricesSchema} from "../house/house.model";

export type ApartmentDocument = HydratedDocument<Apartment>;



@Schema({timestamps: true})
export class Apartment {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    price:number

    @Prop({required: true, type: Types.ObjectId, ref: 'Floor'})
    floorId: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'Slot'})
    slotId: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'House'})
    houseId: Types.ObjectId

    @Prop({required: true})
    isDelete: boolean

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId: Types.ObjectId
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
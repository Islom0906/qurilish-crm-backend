import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type HouseDocument = HydratedDocument<House>;


@Schema({ _id: false })
export class SquarePrices {
    @Prop({required: true})
    startFloor: number

    @Prop({required: true})
    endFloor: number

    @Prop({required: true})
    price: string

}

export const SquarePricesSchema = SchemaFactory.createForClass(SquarePrices);


@Schema({timestamps: true})
export class House {
    @Prop({required: true})
    name: string

    @Prop({type: Types.ObjectId, ref: 'File'})
    image: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'Slot'})
    slotId: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId: Types.ObjectId

    @Prop({required: true,type:[SquarePricesSchema]})
    squarePrices: SquarePrices[]

    @Prop({required: true})
    isDelete: boolean
}

export const HouseSchema = SchemaFactory.createForClass(House);

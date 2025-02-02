import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type HouseDocument = HydratedDocument<House>;





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



    @Prop({required: true})
    isDelete: boolean
}

export const HouseSchema = SchemaFactory.createForClass(House);

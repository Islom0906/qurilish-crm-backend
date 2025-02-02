import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type FloorDocument = HydratedDocument<Floor>;


@Schema({timestamps: true})
export class Floor {
    @Prop({required: true})
    name: string

    @Prop({type: Types.ObjectId, ref: 'File'})
    image: Types.ObjectId

    @Prop({required: true})
    isSale: boolean

    @Prop({default:null})
    priceSqm: number | null

    @Prop({required: true, type: Types.ObjectId, ref: 'House'})
    houseId: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId: Types.ObjectId


    @Prop({required: true})
    isDelete: boolean
}

export const FloorSchema = SchemaFactory.createForClass(Floor);

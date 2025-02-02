import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type StructureDocument = HydratedDocument<Structure>;



@Schema({timestamps: true})
export class Structure {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    size: string

    @Prop({required: true})
    roomCount: number

    @Prop({type: Types.ObjectId, ref: 'File'})
    floorImage: Types.ObjectId

    @Prop({type: Types.ObjectId, ref: 'File'})
    apartmentImage: Types.ObjectId

    @Prop({type: [Types.ObjectId], ref: 'File'})
    images: Types.ObjectId[]

    @Prop({required: true})
    isDelete: boolean

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId: Types.ObjectId
}

export const StructureSchema = SchemaFactory.createForClass(Structure);
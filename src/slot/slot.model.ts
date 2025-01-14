import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';

export type SlotDocument = HydratedDocument<Slot>;

@Schema({timestamps: true})
export class Slot {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    finishedDate: Date

    @Prop({ type: Types.ObjectId, ref: 'File'})
    image: Types.ObjectId

    @Prop({required: true, type: Types.ObjectId, ref: 'Company'})
    companyId:Types.ObjectId

    @Prop({required: true})
    isDelete: boolean
}

export const SlotSchema = SchemaFactory.createForClass(Slot);

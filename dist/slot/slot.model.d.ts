import { HydratedDocument, Types } from 'mongoose';
export type SlotDocument = HydratedDocument<Slot>;
export declare class Slot {
    name: string;
    finishedDate: Date;
    image: Types.ObjectId;
    companyId: Types.ObjectId;
    isDelete: boolean;
}
export declare const SlotSchema: import("mongoose").Schema<Slot, import("mongoose").Model<Slot, any, any, any, import("mongoose").Document<unknown, any, Slot> & Slot & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Slot, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Slot>> & import("mongoose").FlatRecord<Slot> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

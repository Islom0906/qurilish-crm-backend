import { HydratedDocument, Types } from 'mongoose';
export type BookingDocument = HydratedDocument<Booking>;
export declare class Booking {
    type: string;
    days: number;
    price: number;
    companyId: Types.ObjectId;
    isDelete: boolean;
}
export declare const BookingSchema: import("mongoose").Schema<Booking, import("mongoose").Model<Booking, any, any, any, import("mongoose").Document<unknown, any, Booking> & Booking & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Booking, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Booking>> & import("mongoose").FlatRecord<Booking> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

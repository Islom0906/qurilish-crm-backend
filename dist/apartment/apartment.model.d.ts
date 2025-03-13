import { HydratedDocument, Types } from 'mongoose';
export type ApartmentDocument = HydratedDocument<Apartment>;
export declare class Apartment {
    name: string;
    price: number | null;
    floorId: Types.ObjectId;
    slotId: Types.ObjectId;
    houseId: Types.ObjectId;
    isDelete: boolean;
    structureId: Types.ObjectId;
    status: string;
    companyId: Types.ObjectId;
    clientId: Types.ObjectId | null;
    bookingId: Types.ObjectId | null;
    bookingExpiresAt: Date | null;
    lastBookingDate: Date | null;
}
export declare const ApartmentSchema: import("mongoose").Schema<Apartment, import("mongoose").Model<Apartment, any, any, any, import("mongoose").Document<unknown, any, Apartment> & Apartment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Apartment, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Apartment>> & import("mongoose").FlatRecord<Apartment> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

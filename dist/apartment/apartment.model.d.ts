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
    status: boolean | null;
    companyId: Types.ObjectId;
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

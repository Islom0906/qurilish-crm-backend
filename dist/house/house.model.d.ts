import { HydratedDocument, Types } from 'mongoose';
export type HouseDocument = HydratedDocument<House>;
export declare class House {
    name: string;
    image: Types.ObjectId;
    slotId: Types.ObjectId;
    companyId: Types.ObjectId;
    isDelete: boolean;
}
export declare const HouseSchema: import("mongoose").Schema<House, import("mongoose").Model<House, any, any, any, import("mongoose").Document<unknown, any, House> & House & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, House, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<House>> & import("mongoose").FlatRecord<House> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

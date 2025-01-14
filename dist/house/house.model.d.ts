import { HydratedDocument, Types } from 'mongoose';
export type HouseDocument = HydratedDocument<House>;
export declare class SquarePrices {
    startFloor: number;
    endFloor: number;
    price: string;
}
export declare const SquarePricesSchema: import("mongoose").Schema<SquarePrices, import("mongoose").Model<SquarePrices, any, any, any, import("mongoose").Document<unknown, any, SquarePrices> & SquarePrices & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SquarePrices, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SquarePrices>> & import("mongoose").FlatRecord<SquarePrices> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class House {
    name: string;
    image: Types.ObjectId;
    slotId: Types.ObjectId;
    companyId: Types.ObjectId;
    squarePrices: SquarePrices[];
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

import { HydratedDocument, Types } from 'mongoose';
export type FloorDocument = HydratedDocument<Floor>;
export declare class Floor {
    name: string;
    image: Types.ObjectId;
    isSale: boolean;
    houseId: Types.ObjectId;
    companyId: Types.ObjectId;
    isDelete: boolean;
}
export declare const FloorSchema: import("mongoose").Schema<Floor, import("mongoose").Model<Floor, any, any, any, import("mongoose").Document<unknown, any, Floor> & Floor & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Floor, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Floor>> & import("mongoose").FlatRecord<Floor> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

import { HydratedDocument, Types } from 'mongoose';
export type StructureDocument = HydratedDocument<Structure>;
export declare class Structure {
    name: string;
    size: string;
    roomCount: number;
    floorImage: Types.ObjectId;
    apartmentImage: Types.ObjectId;
    images: Types.ObjectId[];
    isDelete: boolean;
    companyId: Types.ObjectId;
}
export declare const StructureSchema: import("mongoose").Schema<Structure, import("mongoose").Model<Structure, any, any, any, import("mongoose").Document<unknown, any, Structure> & Structure & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Structure, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Structure>> & import("mongoose").FlatRecord<Structure> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

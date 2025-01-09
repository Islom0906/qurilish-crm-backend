import { HydratedDocument } from 'mongoose';
export type FileDocument = HydratedDocument<File>;
export declare class File {
    url: string;
    name: string;
}
export declare const FileSchema: import("mongoose").Schema<File, import("mongoose").Model<File, any, any, any, import("mongoose").Document<unknown, any, File> & File & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, File, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<File>> & import("mongoose").FlatRecord<File> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

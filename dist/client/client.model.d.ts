import { HydratedDocument, Types } from 'mongoose';
export type ClientDocument = HydratedDocument<Client>;
export declare class Client {
    first_name: string;
    last_name: string;
    phone: string;
    companyId: Types.ObjectId;
    isDelete: boolean;
}
export declare const ClientSchema: import("mongoose").Schema<Client, import("mongoose").Model<Client, any, any, any, import("mongoose").Document<unknown, any, Client> & Client & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Client, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Client>> & import("mongoose").FlatRecord<Client> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

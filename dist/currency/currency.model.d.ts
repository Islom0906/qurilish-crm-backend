import { HydratedDocument, Types } from 'mongoose';
export type CurrencyDocument = HydratedDocument<Currency>;
export declare class Currency {
    dollar: number;
    status: boolean;
    companyId: Types.ObjectId;
    isDelete: boolean;
}
export declare const CurrencySchema: import("mongoose").Schema<Currency, import("mongoose").Model<Currency, any, any, any, import("mongoose").Document<unknown, any, Currency> & Currency & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Currency, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Currency>> & import("mongoose").FlatRecord<Currency> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

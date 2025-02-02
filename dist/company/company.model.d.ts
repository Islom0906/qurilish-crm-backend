import { HydratedDocument, Types } from 'mongoose';
import { CompanyStatus } from "./company.interface";
export type CompanyDocument = HydratedDocument<Company>;
export declare class Company {
    name: string;
    phone: string;
    staffCount: number;
    status: CompanyStatus;
    expiredDate: Date;
    isPriceSqm: boolean;
    image: Types.ObjectId;
    logo: Types.ObjectId;
    isDelete: boolean;
}
export declare const CompanySchema: import("mongoose").Schema<Company, import("mongoose").Model<Company, any, any, any, import("mongoose").Document<unknown, any, Company> & Company & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Company, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Company>> & import("mongoose").FlatRecord<Company> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;

import { Model } from "mongoose";
import { Company, CompanyDocument } from "./company.model";
import { CompanyDto } from "./dto/company.dto";
import { UserDocument } from "../user/user.model";
export declare class CompanyService {
    private companyModel;
    private userModel;
    constructor(companyModel: Model<CompanyDocument>, userModel: Model<UserDocument>);
    getCompany(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Company> & Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Company> & Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    creatCompany(dto: CompanyDto): Promise<{
        fullName: string;
        email: string;
        role: import("../user/user.interface").RoleUser;
        image: import("mongoose").Types.ObjectId;
        birthday: Date;
        gender: string;
        phone: string;
        _id: import("mongoose").Types.ObjectId;
        name: string;
        status: import("./company.interface").CompanyStatus;
        staffCount: number;
        expiredDate: Date;
    }>;
    updateCompany(id: string, dto: CompanyDto): Promise<{
        fullName: string;
        email: string;
        role: import("../user/user.interface").RoleUser;
        image: import("mongoose").Types.ObjectId;
        phone: string;
        _id: import("mongoose").Types.ObjectId;
        name: string;
        status: import("./company.interface").CompanyStatus;
        staffCount: number;
        expiredDate: Date;
    }>;
    deleteCompany(id: string): Promise<string>;
    isExistUser(email: string): Promise<UserDocument>;
}

import { Model, Types } from "mongoose";
import { Company, CompanyDocument } from "./company.model";
import { CompanyDto } from "./dto/company.dto";
import { UserDocument } from "../user/user.model";
export declare class CompanyService {
    private companyModel;
    private userModel;
    constructor(companyModel: Model<CompanyDocument>, userModel: Model<UserDocument>);
    getCompany(limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Company> & Company & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Company> & Company & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>)[];
        currentPage: number;
        totalPage: number;
        totalItems: number;
        nextPage: number;
        prewPage: number;
    }>;
    creatCompany(dto: CompanyDto): Promise<{
        name: string;
        sur_name: string;
        email: string;
        role: import("../user/user.interface").RoleUser;
        image: Types.ObjectId;
        birthday: Date;
        gender: string;
        phone: string;
        _id: Types.ObjectId;
        staffCount: number;
        status: import("./company.interface").CompanyStatus;
        expiredDate: Date;
        isPriceSqm: boolean;
        logo: Types.ObjectId;
    }>;
    updateCompany(id: string, dto: CompanyDto): Promise<void>;
    deleteCompany(id: string): Promise<string>;
    isExistUser(email: string): Promise<UserDocument>;
}

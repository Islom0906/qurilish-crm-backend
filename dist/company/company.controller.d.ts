import { CompanyService } from "./company.service";
import { CompanyDto } from "./dto/company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    getCompany(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    creatCompany(dto: CompanyDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateCompany(id: string, dto: CompanyDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    deleteCompany(id: string): Promise<string>;
}

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
    creatCompany(dto: CompanyDto): Promise<{
        fullName: string;
        email: string;
        role: import("../user/user.interface").RoleUser;
        _id: import("mongoose").Types.ObjectId;
        name: string;
        status: import("./company.interface").CompanyStatus;
        phone: string;
        staffCount: number;
        expiredDate: Date;
        image: import("mongoose").Types.ObjectId;
    }>;
    deleteCompany(id: string): Promise<string>;
}

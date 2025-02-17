import { CompanyService } from "./company.service";
import { CompanyDto } from "./dto/company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    getCompany(limit?: string, page?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, import("./company.model").Company> & import("./company.model").Company & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
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
        image: import("mongoose").Types.ObjectId;
        birthday: Date;
        gender: string;
        phone: string;
        _id: import("mongoose").Types.ObjectId;
        staffCount: number;
        status: import("./company.interface").CompanyStatus;
        expiredDate: Date;
        isPriceSqm: boolean;
        logo: import("mongoose").Types.ObjectId;
    }>;
    deleteCompany(id: string): Promise<string>;
}

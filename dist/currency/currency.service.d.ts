import { Model } from "mongoose";
import { CommonService } from "../common/common.service";
import { Currency, CurrencyDocument } from "./currency.model";
import { CurrencyDto } from "./dto/currency.dto";
export declare class CurrencyService {
    private currencyModel;
    private readonly commonService;
    constructor(currencyModel: Model<CurrencyDocument>, commonService: CommonService);
    getCurrency(userId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Currency> & Currency & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Currency> & Currency & {
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
    creatCurrency(dto: CurrencyDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Currency> & Currency & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Currency> & Currency & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "_id" | "status" | "dollar">>;
}

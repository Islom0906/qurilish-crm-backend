import { CurrencyService } from "./currency.service";
import { CurrencyDto } from "./dto/currency.dto";
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    getCurrency(userId: string, limit?: string, page?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./currency.model").Currency> & import("./currency.model").Currency & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, import("./currency.model").Currency> & import("./currency.model").Currency & {
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
    creatCurrency(dto: CurrencyDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./currency.model").Currency> & import("./currency.model").Currency & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./currency.model").Currency> & import("./currency.model").Currency & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "_id" | "status" | "dollar">>;
}

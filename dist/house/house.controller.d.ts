import { HouseService } from "./house.service";
import { HouseDto } from "./dto/house.dto";
export declare class HouseController {
    private readonly houseService;
    constructor(houseService: HouseService);
    getHouse(userId: string, slotId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getByIdHouse(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatHouse(dto: HouseDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "slotId" | "squarePrices">>;
    updateHouse(id: string, dto: HouseDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./house.model").House> & import("./house.model").House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "slotId" | "squarePrices">>;
    deleteHouse(id: string): Promise<string>;
}

import { Model } from "mongoose";
import { CommonService } from "../common/common.service";
import { House, HouseDocument } from "./house.model";
import { HouseDto } from "./dto/house.dto";
export declare class HouseService {
    private houseModel;
    private readonly commonService;
    constructor(houseModel: Model<HouseDocument>, commonService: CommonService);
    getHouse(userId: string, slotId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getByIdHouse(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatHouse(dto: HouseDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "slotId" | "squarePrices">>;
    updateHouse(id: string, dto: HouseDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, House> & House & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "slotId" | "squarePrices">>;
    deleteHouse(id: string): Promise<string>;
}

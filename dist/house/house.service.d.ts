import { Model, Types } from "mongoose";
import { CommonService } from "../common/common.service";
import { House, HouseDocument } from "./house.model";
import { HouseDto } from "./dto/house.dto";
export declare class HouseService {
    private houseModel;
    private readonly commonService;
    constructor(houseModel: Model<HouseDocument>, commonService: CommonService);
    getHouse(userId: string, slotId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, House> & House & {
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
    getByIdHouse(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, House> & House & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    creatHouse(dto: HouseDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, House> & House & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "slotId">>;
    updateHouse(id: string, dto: HouseDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, House> & House & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, House> & House & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "slotId">>;
    deleteHouse(id: string): Promise<string>;
}

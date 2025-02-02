import { Floor, FloorDocument } from "./floor.model";
import { Model } from "mongoose";
import { CommonService } from "../common/common.service";
import { FloorDto } from "./dto/floor.dto";
import { CompanyDocument } from "../company/company.model";
export declare class FloorService {
    private floorModel;
    private companyModel;
    private readonly commonService;
    constructor(floorModel: Model<FloorDocument>, companyModel: Model<CompanyDocument>, commonService: CommonService);
    getFloor(userId: string, houseId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
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
    getByIdFloor(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatFloor(dto: FloorDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "isSale" | "priceSqm" | "houseId">>;
    updateFloor(id: string, dto: FloorDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "isSale" | "priceSqm" | "houseId">>;
    deleteFloor(id: string): Promise<string>;
}

import { Floor, FloorDocument } from "./floor.model";
import { Model, Types } from "mongoose";
import { CommonService } from "../common/common.service";
import { FloorDto } from "./dto/floor.dto";
import { CompanyDocument } from "../company/company.model";
import { SlotDocument } from "../slot/slot.model";
import { HouseDocument } from "../house/house.model";
export declare class FloorService {
    private slotModel;
    private houseModel;
    private floorModel;
    private companyModel;
    private readonly commonService;
    constructor(slotModel: Model<SlotDocument>, houseModel: Model<HouseDocument>, floorModel: Model<FloorDocument>, companyModel: Model<CompanyDocument>, commonService: CommonService);
    getFloor(userId: string, houseId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
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
    getByIdFloor(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    creatFloor(dto: FloorDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "isSale" | "priceSqm" | "houseId">>;
    updateFloor(id: string, dto: FloorDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Floor> & Floor & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "isSale" | "priceSqm" | "houseId">>;
    deleteFloor(id: string): Promise<string>;
}

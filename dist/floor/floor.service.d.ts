import { Floor, FloorDocument } from "./floor.model";
import { Model, Types } from "mongoose";
import { CommonService } from "../common/common.service";
import { FloorDto, FloorEditPriceDto } from "./dto/floor.dto";
import { CompanyDocument } from "../company/company.model";
import { SlotDocument } from "../slot/slot.model";
import { HouseDocument } from "../house/house.model";
import { ApartmentDocument } from "../apartment/apartment.model";
import { StructureDocument } from "../structure/structure.model";
export declare class FloorService {
    private slotModel;
    private houseModel;
    private apartmentModel;
    private floorModel;
    private companyModel;
    private structureModel;
    private readonly commonService;
    constructor(slotModel: Model<SlotDocument>, houseModel: Model<HouseDocument>, apartmentModel: Model<ApartmentDocument>, floorModel: Model<FloorDocument>, companyModel: Model<CompanyDocument>, structureModel: Model<StructureDocument>, commonService: CommonService);
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
    getFloorShaxmat(userId: string): Promise<any[]>;
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
    editFloorPrice(dto: FloorEditPriceDto, userId: string): Promise<string>;
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

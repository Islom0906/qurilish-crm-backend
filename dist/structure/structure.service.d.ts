import { Model, Types } from "mongoose";
import { CommonService } from "../common/common.service";
import { Structure, StructureDocument } from "./structure.model";
import { StructureDto } from "./dto/structure.dto";
export declare class StructureService {
    private structureModel;
    private readonly commonService;
    constructor(structureModel: Model<StructureDocument>, commonService: CommonService);
    getStructure(userId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Structure> & Structure & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Structure> & Structure & {
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
    getByIdStructure(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Structure> & Structure & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Structure> & Structure & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    creatStructure(dto: StructureDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Structure> & Structure & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Structure> & Structure & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "_id" | "size" | "roomCount" | "floorImage" | "apartmentImage" | "images">>;
    updateStructure(id: string, dto: StructureDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Structure> & Structure & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Structure> & Structure & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "_id" | "size" | "roomCount" | "floorImage" | "apartmentImage" | "images">>;
    deleteStructure(id: string): Promise<string>;
}

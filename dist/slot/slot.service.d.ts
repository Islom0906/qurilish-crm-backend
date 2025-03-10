import { Model, Types } from "mongoose";
import { Slot, SlotDocument } from "./slot.model";
import { SlotDto } from "./dto/slot.dto";
import { CommonService } from "../common/common.service";
export declare class SlotService {
    private slotModel;
    private readonly commonService;
    constructor(slotModel: Model<SlotDocument>, commonService: CommonService);
    getSlot(userId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
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
    getByIdSlot(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    creatSlot(dto: SlotDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "finishedDate">>;
    updateSlot(id: string, dto: SlotDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "finishedDate">>;
    deleteSlot(id: string): Promise<string>;
}

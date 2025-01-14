import { Model } from "mongoose";
import { Slot, SlotDocument } from "./slot.model";
import { SlotDto } from "./dto/slot.dto";
import { CommonService } from "../common/common.service";
export declare class SlotService {
    private slotModel;
    private readonly commonService;
    constructor(slotModel: Model<SlotDocument>, commonService: CommonService);
    getSlot(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getByIdSlot(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatSlot(dto: SlotDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "finishedDate">>;
    updateSlot(id: string, dto: SlotDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Slot> & Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "finishedDate">>;
    deleteSlot(id: string): Promise<string>;
}

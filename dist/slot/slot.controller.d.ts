import { SlotService } from "./slot.service";
import { SlotDto } from "./dto/slot.dto";
export declare class SlotController {
    private readonly slotService;
    constructor(slotService: SlotService);
    getSlot(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getByIdSlot(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatSlot(dto: SlotDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "image" | "_id" | "name" | "finishedDate">>;
    updateCompany(id: string, dto: SlotDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./slot.model").Slot> & import("./slot.model").Slot & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "image" | "_id" | "name" | "finishedDate">>;
    deleteSlot(id: string): Promise<string>;
}

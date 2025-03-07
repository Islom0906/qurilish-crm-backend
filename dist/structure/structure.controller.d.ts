import { StructureService } from "./structure.service";
import { StructureDto } from "./dto/structure.dto";
export declare class StructureController {
    private readonly structureService;
    constructor(structureService: StructureService);
    getStructure(userId: string, limit?: string, page?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
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
    getByIdStructure(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatStructure(dto: StructureDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "_id" | "size" | "roomCount" | "floorImage" | "apartmentImage" | "images">>;
    updateStructure(id: string, dto: StructureDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./structure.model").Structure> & import("./structure.model").Structure & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "_id" | "size" | "roomCount" | "floorImage" | "apartmentImage" | "images">>;
    deleteStructure(id: string): Promise<string>;
}

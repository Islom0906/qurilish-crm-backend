import { FloorService } from "./floor.service";
import { FloorDto } from "./dto/floor.dto";
export declare class FloorController {
    private readonly floorService;
    constructor(floorService: FloorService);
    getFloor(userId: string, houseId: string, limit?: string, page?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
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
    getFloorShaxmat(userId: string): Promise<any[]>;
    getByIdFloor(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatFloor(dto: FloorDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "isSale" | "priceSqm" | "houseId">>;
    updateFloor(id: string, dto: FloorDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./floor.model").Floor> & import("./floor.model").Floor & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "companyId" | "image" | "_id" | "isSale" | "priceSqm" | "houseId">>;
    deleteFloor(id: string): Promise<string>;
}

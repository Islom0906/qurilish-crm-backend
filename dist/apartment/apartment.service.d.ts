import { Model, Types } from "mongoose";
import { CommonService } from "../common/common.service";
import { Apartment, ApartmentDocument } from "./apartment.model";
import { ApartmentDto } from "./dto/apartment.dto";
export declare class ApartmentService {
    private apartmentModel;
    private readonly commonService;
    constructor(apartmentModel: Model<ApartmentDocument>, commonService: CommonService);
    getApartment(userId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
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
    getByIdApartment(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    creatApartment(dto: ApartmentDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "_id" | "status" | "slotId" | "houseId" | "floorId" | "price" | "structureId">>;
    updateApartment(id: string, dto: ApartmentDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, "name" | "_id" | "status" | "slotId" | "houseId" | "floorId" | "price" | "structureId">>;
    deleteApartment(id: string): Promise<string>;
}

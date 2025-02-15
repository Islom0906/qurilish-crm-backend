import { Model, Types } from "mongoose";
import { CommonService } from "../common/common.service";
import { Apartment, ApartmentDocument } from "./apartment.model";
import { ApartmentDto } from "./dto/apartment.dto";
import { FloorDocument } from "../floor/floor.model";
import { CompanyDocument } from "../company/company.model";
import { StructureDocument } from "../structure/structure.model";
export declare class ApartmentService {
    private apartmentModel;
    private floorModel;
    private structureModel;
    private companyModel;
    private readonly commonService;
    constructor(apartmentModel: Model<ApartmentDocument>, floorModel: Model<FloorDocument>, structureModel: Model<StructureDocument>, companyModel: Model<CompanyDocument>, commonService: CommonService);
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
    }>, "name" | "price" | "floorId" | "slotId" | "houseId" | "structureId" | "status" | "_id">>;
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
    }>, "name" | "price" | "floorId" | "slotId" | "houseId" | "structureId" | "status" | "_id">>;
    deleteApartment(id: string): Promise<string>;
}

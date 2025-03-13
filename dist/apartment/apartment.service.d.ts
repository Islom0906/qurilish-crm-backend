import { Model, Types } from "mongoose";
import { CommonService } from "../common/common.service";
import { Apartment, ApartmentDocument } from "./apartment.model";
import { ApartmentDto, ApartmentEditPriceDto, ApartmentEditStatusDto } from "./dto/apartment.dto";
import { FloorDocument } from "../floor/floor.model";
import { CompanyDocument } from "../company/company.model";
import { StructureDocument } from "../structure/structure.model";
import { BookingDocument } from "../booking/booking.model";
export declare class ApartmentService {
    private apartmentModel;
    private floorModel;
    private structureModel;
    private companyModel;
    private bookingModel;
    private readonly commonService;
    constructor(apartmentModel: Model<ApartmentDocument>, floorModel: Model<FloorDocument>, structureModel: Model<StructureDocument>, companyModel: Model<CompanyDocument>, bookingModel: Model<BookingDocument>, commonService: CommonService);
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
    }>, "name" | "_id" | "status" | "slotId" | "houseId" | "price" | "floorId" | "structureId">>;
    editApartmentPrice(dto: ApartmentEditPriceDto, userId: string): Promise<string>;
    editApartmentStatus(id: any, dto: ApartmentEditStatusDto, userId: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
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
    }>, "name" | "_id" | "status" | "slotId" | "houseId" | "price" | "floorId" | "structureId">>;
    deleteApartment(id: string): Promise<string>;
    checkBookingExpiration(): Promise<void>;
}

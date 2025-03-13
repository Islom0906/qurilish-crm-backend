import { ApartmentService } from "./apartment.service";
import { ApartmentDto, ApartmentEditPriceDto, ApartmentEditStatusDto } from "./dto/apartment.dto";
export declare class ApartmentController {
    private readonly apartmentService;
    constructor(apartmentService: ApartmentService);
    getApartment(userId: string, limit?: string, page?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
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
    getByIdApartment(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatApartment(dto: ApartmentDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "_id" | "status" | "slotId" | "houseId" | "price" | "floorId" | "structureId">>;
    editApartmentPrice(dto: ApartmentEditPriceDto, userId: string): Promise<string>;
    editApartmentStatus(id: string, dto: ApartmentEditStatusDto, userId: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateApartment(id: string, dto: ApartmentDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./apartment.model").Apartment> & import("./apartment.model").Apartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "name" | "_id" | "status" | "slotId" | "houseId" | "price" | "floorId" | "structureId">>;
    deleteApartment(id: string): Promise<string>;
}

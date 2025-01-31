import { Model } from "mongoose";
import { CommonService } from "../common/common.service";
import { Apartment, ApartmentDocument } from "./apartment.model";
export declare class ApartmentService {
    private apartmentModel;
    private readonly commonService;
    constructor(apartmentModel: Model<ApartmentDocument>, commonService: CommonService);
    getApartment(userId: string, limit: string, page: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, Apartment> & Apartment & {
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
}

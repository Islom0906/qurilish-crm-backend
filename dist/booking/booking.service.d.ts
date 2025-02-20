import { Model } from "mongoose";
import { CommonService } from "../common/common.service";
import { Booking, BookingDocument } from "./booking.model";
import { BookingDto } from "./dto/booking.dto";
export declare class BookingService {
    private bookingModel;
    private readonly commonService;
    constructor(bookingModel: Model<BookingDocument>, commonService: CommonService);
    getBooking(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getByIdBooking(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatBooking(dto: BookingDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "_id" | "type" | "price" | "days">>;
    updateBooking(id: string, dto: BookingDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Booking> & Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "_id" | "type" | "price" | "days">>;
    deleteBooking(id: string): Promise<string>;
}

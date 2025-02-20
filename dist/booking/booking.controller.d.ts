import { BookingService } from "./booking.service";
import { BookingDto } from "./dto/booking.dto";
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    getBooking(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getByIdBooking(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatBooking(dto: BookingDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "_id" | "type" | "price" | "days">>;
    updateBooking(id: string, dto: BookingDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./booking.model").Booking> & import("./booking.model").Booking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "_id" | "type" | "price" | "days">>;
    deleteBooking(id: string): Promise<string>;
}

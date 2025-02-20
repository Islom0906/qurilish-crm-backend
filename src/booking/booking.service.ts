import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {Booking, BookingDocument} from "./booking.model";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";
import {BookingDto} from "./dto/booking.dto";
import {pick} from "lodash";

@Injectable()
export class BookingService {
    constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>, private readonly commonService: CommonService) {
    }

    // GET ALL booking
    async getBooking(userId:string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const filter:CompanyAndIsDeleteInterface={isDelete: false,companyId}

        const booking = await this.bookingModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .sort({createdAt: -1})
        return booking
    }

    // GET by id booking
    async getByIdBooking(id: string) {
        const booking = await this.bookingModel.findOne({_id:id,isDelete:false})
            .select('-createdAt -updatedAt -isDelete')
        if (!booking) throw new NotFoundException("Booking topilmadi")

        return booking
    }

    // POST booking
    async creatBooking(dto: BookingDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const filter:CompanyAndIsDeleteInterface={isDelete: false,companyId}

        const bookingLength=await this.bookingModel.find(filter).lean()

        if (bookingLength.length>2) throw new BadRequestException("Siz boshqa booking turi qo'sha olmaysiz")

        const booking = await this.bookingModel.create({
            ...dto,
            price:dto.type==="free" ? 0:dto.price,
            companyId,
            isDelete: false
        })
        return pick(booking, ['type', 'days', '_id', 'price', 'companyId'])
    }

    // Edit Booking
    async updateBooking(id: string, dto: BookingDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const booking = await this.bookingModel.findByIdAndUpdate(id,
            {
                ...dto,
                price:dto.type==="free" ? 0:dto.price,
                companyId,
                isDelete: false
            },{new:true}
        )

        if (!booking) throw new NotFoundException('Booking topilmadi')

        return pick(booking, ['type', 'days', '_id', 'price', 'companyId'])
    }

    // DELETE Booking
    async deleteBooking(id: string) {
        const findAndDelete = await this.bookingModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Booking topilmadi')
        return 'success delete'
    }
}

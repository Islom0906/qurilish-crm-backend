"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const booking_model_1 = require("./booking.model");
const lodash_1 = require("lodash");
let BookingService = class BookingService {
    constructor(bookingModel, commonService) {
        this.bookingModel = bookingModel;
        this.commonService = commonService;
    }
    async getBooking(userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const booking = await this.bookingModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .sort({ createdAt: -1 });
        return booking;
    }
    async getByIdBooking(id) {
        const booking = await this.bookingModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt -isDelete');
        if (!booking)
            throw new common_1.NotFoundException("Booking topilmadi");
        return booking;
    }
    async creatBooking(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const bookingLength = await this.bookingModel.find(filter).lean();
        if (bookingLength.length > 2)
            throw new common_1.BadRequestException("Siz boshqa booking turi qo'sha olmaysiz");
        const booking = await this.bookingModel.create({
            ...dto,
            price: dto.type === "free" ? 0 : dto.price,
            companyId,
            isDelete: false
        });
        return (0, lodash_1.pick)(booking, ['type', 'days', '_id', 'price', 'companyId']);
    }
    async updateBooking(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const booking = await this.bookingModel.findByIdAndUpdate(id, {
            ...dto,
            price: dto.type === "free" ? 0 : dto.price,
            companyId,
            isDelete: false
        }, { new: true });
        if (!booking)
            throw new common_1.NotFoundException('Booking topilmadi');
        return (0, lodash_1.pick)(booking, ['type', 'days', '_id', 'price', 'companyId']);
    }
    async deleteBooking(id) {
        const findAndDelete = await this.bookingModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('Booking topilmadi');
        return 'success delete';
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(booking_model_1.Booking.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], BookingService);
//# sourceMappingURL=booking.service.js.map
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
exports.ApartmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const apartment_model_1 = require("./apartment.model");
const lodash_1 = require("lodash");
let ApartmentService = class ApartmentService {
    constructor(apartmentModel, commonService) {
        this.apartmentModel = apartmentModel;
        this.commonService = commonService;
    }
    async getApartment(userId, limit, page) {
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const skip = (Number(pageNumber) - 1) * Number(pageSize);
        const getApartment = await this.apartmentModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('floorId', '_id name')
            .populate('slotId', '_id name')
            .populate('houseId', '_id name')
            .populate('structureId', '_id name')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(pageSize);
        const totalItems = await this.apartmentModel.countDocuments(filter);
        const totalPage = Math.ceil(totalItems / pageSize);
        return {
            data: getApartment,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage: pageNumber < totalPage ? pageNumber + 1 : null,
            prewPage: pageNumber > 1 ? pageNumber - 1 : null
        };
    }
    async getByIdApartment(id) {
        const apartment = await this.apartmentModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt -isDelete')
            .populate('floorId', '_id name')
            .populate('slotId', '_id name')
            .populate('houseId', '_id name')
            .populate('structureId', '_id name');
        if (!apartment)
            throw new common_1.NotFoundException("House topilmadi");
        return apartment;
    }
    async creatApartment(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const checkName = await this.apartmentModel.findOne({ slotId: dto.slotId, houseId: dto.houseId, floorId: dto.floorId, name: dto.name, isDelete: false });
        if (checkName)
            throw new common_1.BadRequestException("Xonani nomi takrorlanmasligi kerak");
        const apartment = await this.apartmentModel.create({
            ...dto,
            companyId,
            status: null,
            price: null,
            isDelete: false
        });
        return (0, lodash_1.pick)(apartment, ['name', '_id', 'price', 'floorId', 'slotId', 'houseId', 'structureId', 'status']);
    }
    async updateApartment(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const checkName = await this.apartmentModel.findOne({ slotId: dto.slotId, houseId: dto.houseId, floorId: dto.floorId, name: dto.name, isDelete: false });
        console.log(checkName);
        if (checkName && checkName._id.toString() !== id)
            throw new common_1.BadRequestException("Xonani nomi takrorlanmasligi kerak");
        const apartment = await this.apartmentModel.findByIdAndUpdate(id, {
            ...dto,
            companyId,
            status: null,
            price: null,
            isDelete: false
        }, { new: true });
        if (!apartment)
            throw new common_1.NotFoundException('Apartment topilmadi');
        return (0, lodash_1.pick)(apartment, ['name', '_id', 'price', 'floorId', 'slotId', 'houseId', 'structureId', 'status']);
    }
    async deleteApartment(id) {
        const findAndDelete = await this.apartmentModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('House topilmadi');
        return 'success delete';
    }
};
exports.ApartmentService = ApartmentService;
exports.ApartmentService = ApartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(apartment_model_1.Apartment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], ApartmentService);
//# sourceMappingURL=apartment.service.js.map
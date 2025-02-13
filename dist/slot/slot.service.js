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
exports.SlotService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slot_model_1 = require("./slot.model");
const common_service_1 = require("../common/common.service");
const lodash_1 = require("lodash");
let SlotService = class SlotService {
    constructor(slotModel, commonService) {
        this.slotModel = slotModel;
        this.commonService = commonService;
    }
    async getSlot(userId, limit, page) {
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const skip = (Number(pageNumber) - 1) * Number(pageSize);
        const slot = await this.slotModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(pageSize);
        const totalItems = await this.slotModel.countDocuments(filter);
        const totalPage = Math.ceil(totalItems / pageSize);
        return {
            data: slot,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage: pageNumber < totalPage ? pageNumber + 1 : null,
            prewPage: pageNumber > 1 ? pageNumber - 1 : null
        };
    }
    async getByIdSlot(id) {
        const slot = await this.slotModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt')
            .populate('image', '-createdAt -updatedAt -isDelete');
        if (!slot)
            throw new common_1.NotFoundException("Slot topilmadi");
        return slot;
    }
    async creatSlot(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const service = await this.slotModel.create({
            ...dto,
            companyId,
            image: new mongoose_2.Types.ObjectId(dto.image),
            isDelete: false
        });
        return (0, lodash_1.pick)(service, ['name', 'companyId', '_id', 'finishedDate', 'image']);
    }
    async updateSlot(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const service = await this.slotModel.findByIdAndUpdate(id, {
            ...dto,
            companyId,
            image: new mongoose_2.Types.ObjectId(dto.image),
            isDelete: false
        }, { new: true });
        if (!service)
            throw new common_1.NotFoundException('Slot topilmadi');
        return (0, lodash_1.pick)(service, ['name', 'companyId', '_id', 'finishedDate', 'image']);
    }
    async deleteSlot(id) {
        const findAndDelete = await this.slotModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('Slot topilmadi');
        return 'success delete';
    }
};
exports.SlotService = SlotService;
exports.SlotService = SlotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(slot_model_1.Slot.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], SlotService);
//# sourceMappingURL=slot.service.js.map
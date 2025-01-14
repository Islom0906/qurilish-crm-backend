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
exports.HouseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const house_model_1 = require("./house.model");
const lodash_1 = require("lodash");
let HouseService = class HouseService {
    constructor(houseModel, commonService) {
        this.houseModel = houseModel;
        this.commonService = commonService;
    }
    async getHouse(userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const getHouse = await this.houseModel.find({ isDelete: false, companyId })
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id');
        return getHouse;
    }
    async getByIdHouse(id) {
        const house = await this.houseModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', '-createdAt -updatedAt')
            .populate('slotId', '-createdAt -updatedAt -finishedDate -image -companyId -isDelete -__v');
        if (!house)
            throw new common_1.NotFoundException("House topilmadi");
        return house;
    }
    async creatHouse(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const service = await this.houseModel.create({
            ...dto,
            companyId,
            isDelete: false
        });
        return (0, lodash_1.pick)(service, ['name', 'companyId', '_id', 'slotId', 'image', 'squarePrices']);
    }
    async updateHouse(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const house = await this.houseModel.findByIdAndUpdate(id, {
            ...dto,
            companyId,
            isDelete: false
        }, { new: true });
        if (!house)
            throw new common_1.NotFoundException('House topilmadi');
        return (0, lodash_1.pick)(house, ['name', 'companyId', '_id', 'slotId', 'image', 'squarePrices']);
    }
    async deleteHouse(id) {
        const findAndDelete = await this.houseModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('House topilmadi');
        return 'success delete';
    }
};
exports.HouseService = HouseService;
exports.HouseService = HouseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(house_model_1.House.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], HouseService);
//# sourceMappingURL=house.service.js.map
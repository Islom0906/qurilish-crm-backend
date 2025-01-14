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
exports.FloorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const floor_model_1 = require("./floor.model");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const lodash_1 = require("lodash");
let FloorService = class FloorService {
    constructor(floorModel, commonService) {
        this.floorModel = floorModel;
        this.commonService = commonService;
    }
    async getFloor(userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const getFloor = await this.floorModel.find({ isDelete: false, companyId })
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id');
        return getFloor;
    }
    async getByIdFloor(id) {
        const floor = await this.floorModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', '-createdAt -updatedAt -isDelete ')
            .populate('houseId', '-createdAt -updatedAt -image -slotId -companyId -squarePrices -isDelete -__v');
        if (!floor)
            throw new common_1.NotFoundException("Floor topilmadi");
        return floor;
    }
    async creatFloor(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const floor = await this.floorModel.create({
            ...dto,
            companyId,
            isDelete: false
        });
        return (0, lodash_1.pick)(floor, ['name', 'companyId', '_id', 'houseId', 'image', 'isSale']);
    }
    async updateFloor(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const floor = await this.floorModel.findOneAndUpdate({ _id: id,
            isDelete: false }, {
            ...dto,
            companyId,
            isDelete: false
        }, { new: true });
        if (!floor)
            throw new common_1.NotFoundException('Floor topilmadi');
        return (0, lodash_1.pick)(floor, ['name', 'companyId', '_id', 'houseId', 'image', 'isSale']);
    }
    async deleteFloor(id) {
        const findAndDelete = await this.floorModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('Floor topilmadi');
        return 'success delete';
    }
};
exports.FloorService = FloorService;
exports.FloorService = FloorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(floor_model_1.Floor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], FloorService);
//# sourceMappingURL=floor.service.js.map
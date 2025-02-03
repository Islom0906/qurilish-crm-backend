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
exports.StructureService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const structure_model_1 = require("./structure.model");
const lodash_1 = require("lodash");
let StructureService = class StructureService {
    constructor(structureModel, commonService) {
        this.structureModel = structureModel;
        this.commonService = commonService;
    }
    async getStructure(userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const getStructure = await this.structureModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('images', 'url -_id')
            .populate('floorImage', 'url -_id')
            .populate('apartmentImage', 'url -_id')
            .sort({ createdAt: -1 });
        return getStructure;
    }
    async getByIdStructure(id) {
        const structure = await this.structureModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt -isDelete')
            .populate('images', '-createdAt -updatedAt')
            .populate('floorImage', '-createdAt -updatedAt')
            .populate('apartmentImage', '-createdAt -updatedAt');
        if (!structure)
            throw new common_1.NotFoundException("House topilmadi");
        return structure;
    }
    async creatStructure(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const structure = await this.structureModel.create({
            ...dto,
            companyId,
            isDelete: false
        });
        return (0, lodash_1.pick)(structure, ['name', 'size', '_id', 'roomCount', 'floorImage', 'apartmentImage', 'images']);
    }
    async updateStructure(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const structure = await this.structureModel.findByIdAndUpdate(id, {
            ...dto,
            companyId,
            isDelete: false
        }, { new: true });
        if (!structure)
            throw new common_1.NotFoundException('Structure topilmadi');
        return (0, lodash_1.pick)(structure, ['name', 'size', '_id', 'roomCount', 'floorImage', 'apartmentImage', 'images']);
    }
    async deleteStructure(id) {
        const findAndDelete = await this.structureModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('House topilmadi');
        return 'success delete';
    }
};
exports.StructureService = StructureService;
exports.StructureService = StructureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(structure_model_1.Structure.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], StructureService);
//# sourceMappingURL=structure.service.js.map
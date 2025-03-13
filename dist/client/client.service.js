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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const client_model_1 = require("./client.model");
const lodash_1 = require("lodash");
let ClientService = class ClientService {
    constructor(clientModel, commonService) {
        this.clientModel = clientModel;
        this.commonService = commonService;
    }
    async getClient(userId, limit, page) {
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const skip = (Number(pageNumber) - 1) * Number(pageSize);
        const client = await this.clientModel.find(filter)
            .select('-createdAt -updatedAt -isDelete -companyId')
            .populate('userId', '-createdAt -updatedAt -isDelete -password -companyId')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(pageSize);
        const totalItems = await this.clientModel.countDocuments(filter);
        const totalPage = Math.ceil(totalItems / pageSize);
        return {
            data: client,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage: pageNumber < totalPage ? pageNumber + 1 : null,
            prewPage: pageNumber > 1 ? pageNumber - 1 : null
        };
    }
    async getByIdClient(id) {
        const client = await this.clientModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt -isDelete -companyId')
            .populate('userId', '-createdAt -updatedAt -isDelete -password -companyId');
        if (!client)
            throw new common_1.NotFoundException("Client topilmadi");
        return client;
    }
    async creatClient(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const client = await this.clientModel.create({
            ...dto,
            companyId,
            userId,
            isDelete: false
        });
        return (0, lodash_1.pick)(client, ['first_name', 'last_name', '_id', 'phone', 'companyId', 'userId']);
    }
    async updateClient(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const client = await this.clientModel.findByIdAndUpdate(id, {
            ...dto,
            companyId,
            userId,
            isDelete: false
        }, { new: true });
        if (!client)
            throw new common_1.NotFoundException('Client topilmadi');
        return (0, lodash_1.pick)(client, ['first_name', 'last_name', '_id', 'phone', 'companyId', 'userId']);
    }
    async deleteClient(id) {
        const findAndDelete = await this.clientModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('Client topilmadi');
        return 'success delete';
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(client_model_1.Client.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], ClientService);
//# sourceMappingURL=client.service.js.map
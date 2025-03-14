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
exports.CurrencyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const currency_model_1 = require("./currency.model");
const lodash_1 = require("lodash");
let CurrencyService = class CurrencyService {
    constructor(currencyModel, commonService) {
        this.currencyModel = currencyModel;
        this.commonService = commonService;
    }
    async getCurrency(userId, limit, page) {
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const skip = (Number(pageNumber) - 1) * Number(pageSize);
        const currency = await this.currencyModel.find(filter)
            .select(' -updatedAt -isDelete')
            .sort({ status: -1, createdAt: -1 })
            .skip(skip)
            .limit(pageSize);
        const totalItems = await this.currencyModel.countDocuments(filter);
        const totalPage = Math.ceil(totalItems / pageSize);
        return {
            data: currency,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage: pageNumber < totalPage ? pageNumber + 1 : null,
            prewPage: pageNumber > 1 ? pageNumber - 1 : null
        };
    }
    async creatCurrency(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        await this.currencyModel.findOneAndUpdate({ isDelete: false, companyId, status: true }, { $set: { status: false } }, { new: true });
        const currency = await this.currencyModel.create({
            ...dto,
            status: true,
            companyId,
            isDelete: false
        });
        return (0, lodash_1.pick)(currency, ['dollar', 'status', '_id', 'companyId']);
    }
};
exports.CurrencyService = CurrencyService;
exports.CurrencyService = CurrencyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(currency_model_1.Currency.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, common_service_1.CommonService])
], CurrencyService);
//# sourceMappingURL=currency.service.js.map
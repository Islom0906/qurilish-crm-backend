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
exports.SellerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const user_model_1 = require("../user/user.model");
const bcryptjs_1 = require("bcryptjs");
const company_model_1 = require("../company/company.model");
const lodash_1 = require("lodash");
let SellerService = class SellerService {
    constructor(userModel, companyModel, commonService) {
        this.userModel = userModel;
        this.companyModel = companyModel;
        this.commonService = commonService;
    }
    async getSeller(userId, limit, page) {
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const skip = (Number(pageNumber) - 1) * Number(pageSize);
        const getSeller = await this.userModel.find({ companyId, role: 'staff' })
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(pageSize);
        const totalItems = await this.userModel.countDocuments({ companyId, role: 'staff' });
        const totalPage = Math.ceil(totalItems / pageSize);
        return {
            data: getSeller,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage: pageNumber < totalPage ? pageNumber + 1 : null,
            prewPage: pageNumber > 1 ? pageNumber - 1 : null
        };
    }
    async getByIdSeller(id) {
        const seller = await this.userModel.findOne({ _id: id })
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', '-createdAt -updatedAt');
        if (!seller)
            throw new common_1.NotFoundException("Seller topilmadi");
        return seller;
    }
    async creatSeller(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const company = await this.companyModel.findById(companyId);
        const existUser = await this.isExistUser(dto.email);
        if (existUser)
            throw new common_1.BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan");
        const checkSellerCount = await this.userModel.find({ companyId, role: 'staff' });
        if (company.staffCount <= checkSellerCount.length)
            throw new common_1.BadRequestException("Siz kerakli sellerni qo'shib bo'ldingiz");
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const passwordHash = await (0, bcryptjs_1.hash)(dto.password, salt);
        const newUser = await this.userModel.create({
            ...dto,
            role: 'staff',
            companyId,
            password: passwordHash
        });
        return (0, lodash_1.pick)(newUser, ['_id', 'email', 'name', 'sur_name', 'image', 'birthday', 'gender', 'phone']);
    }
    async updateSeller(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const company = await this.companyModel.findById(companyId);
        const existUser = await this.isExistUser(dto.email);
        if (existUser)
            throw new common_1.BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan");
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const passwordHash = await (0, bcryptjs_1.hash)(dto.password, salt);
        const newUser = await this.userModel.findByIdAndUpdate(id, {
            ...dto,
            role: 'staff',
            companyId,
            password: passwordHash
        }, { new: true });
        return (0, lodash_1.pick)(newUser, ['_id', 'email', 'name', 'sur_name', 'image', 'birthday', 'gender', 'phone']);
    }
    async deleteSeller(id) {
        const findAndDelete = await this.userModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('Seller topilmadi');
        return 'success delete';
    }
    async isExistUser(email) {
        const existUser = await this.userModel.findOne({ email });
        return existUser;
    }
};
exports.SellerService = SellerService;
exports.SellerService = SellerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(company_model_1.Company.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        common_service_1.CommonService])
], SellerService);
//# sourceMappingURL=seller.service.js.map
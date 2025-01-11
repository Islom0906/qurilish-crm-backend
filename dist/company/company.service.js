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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const company_model_1 = require("./company.model");
const user_model_1 = require("../user/user.model");
const lodash_1 = require("lodash");
const bcryptjs_1 = require("bcryptjs");
let CompanyService = class CompanyService {
    constructor(companyModel, userModel) {
        this.companyModel = companyModel;
        this.userModel = userModel;
    }
    async getCompany() {
        const res = await this.companyModel.find({ isDelete: false })
            .select('-createdAt -updatedAt')
            .populate('image', 'url -_id');
        return res;
    }
    async creatCompany(dto) {
        const existUser = await this.isExistUser(dto.email);
        if (existUser)
            throw new common_1.BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan");
        const company = await this.companyModel.create({
            name: dto.name,
            phone: dto.phone,
            staffCount: dto.staffCount,
            expiredDate: dto.expiredDate,
            image: dto.image,
            status: "active",
            isDelete: false
        });
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const passwordHash = await (0, bcryptjs_1.hash)(dto.password, salt);
        const companyAdmin = await this.userModel.create({
            fullName: dto.fullName,
            email: dto.email,
            password: passwordHash,
            role: 'admin',
            companyId: company._id
        });
        return {
            ...(0, lodash_1.pick)(company, ['name', 'phone', 'staffCount', 'expiredDate', 'image', 'status', '_id']),
            ...(0, lodash_1.pick)(companyAdmin, ['email', 'fullName', 'role'])
        };
    }
    async updateCompany(id, dto) {
        const company = await this.companyModel.findByIdAndUpdate(id, {
            name: dto.name,
            phone: dto.phone,
            staffCount: dto.staffCount,
            expiredDate: dto.expiredDate,
            image: dto.image,
            status: "active",
            isDelete: false
        }, { new: true });
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const passwordHash = await (0, bcryptjs_1.hash)(dto.password, salt);
        const companyAdmin = await this.userModel.findOneAndUpdate({ companyId: id }, {
            fullName: dto.fullName,
            email: dto.email,
            password: passwordHash,
            role: 'admin',
            companyId: company._id
        }, { new: true, upsert: true });
        console.log(companyAdmin);
        if (!company)
            throw new common_1.NotFoundException('Company topilmadi');
        if (!companyAdmin)
            throw new common_1.NotFoundException("Bunday admin yo'q");
        return {
            ...(0, lodash_1.pick)(company, ['name', 'phone', 'staffCount', 'expiredDate', 'image', 'status', '_id']),
            ...(0, lodash_1.pick)(companyAdmin, ['email', 'fullName', 'role'])
        };
    }
    async deleteCompany(id) {
        const findAndDelete = await this.companyModel.findOneAndUpdate({ _id: id, isDelete: false }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('Company topilmadi');
        return 'success delete';
    }
    async isExistUser(email) {
        const existUser = await this.userModel.findOne({ email });
        return existUser;
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_model_1.Company.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CompanyService);
//# sourceMappingURL=company.service.js.map
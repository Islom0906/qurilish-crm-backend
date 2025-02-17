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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("./user.model");
const mongoose_2 = require("mongoose");
const company_model_1 = require("../company/company.model");
let UserService = class UserService {
    constructor(companyModel, userModel) {
        this.companyModel = companyModel;
        this.userModel = userModel;
    }
    async byId(id) {
        const user = await this.userModel.findById(id)
            .select('-createdAt -updatedAt -__v').lean();
        let company;
        if (user.companyId) {
            company = await this.companyModel.findOne({ _id: user.companyId, isDelete: false });
        }
        console.log(company);
        if (!user)
            throw new common_1.NotFoundException('Not Found User');
        const data = {
            ...user,
            isPriceSqm: user.companyId ? company?.isPriceSqm : null
        };
        return data;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_model_1.Company.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map
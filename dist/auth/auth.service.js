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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const user_model_1 = require("../user/user.model");
const mongoose_2 = require("@nestjs/mongoose");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const existUser = await this.isExistUser(dto.email);
        if (existUser)
            throw new common_1.BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan");
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const passwordHash = await (0, bcryptjs_1.hash)(dto.password, salt);
        const newUser = await this.userModel.create({
            ...dto,
            password: passwordHash
        });
        const token = await this.issueTokenPair(String(newUser._id));
        return { user: this.getUserField(newUser), ...token };
    }
    async login(dto) {
        const existUser = await this.isExistUser(dto.email);
        if (!existUser)
            throw new common_1.BadRequestException('Foydalanuvchi topilmadi');
        const currentPassword = await (0, bcryptjs_1.compare)(dto.password, existUser.password);
        if (!currentPassword)
            throw new common_1.BadRequestException("Parol notog'ri");
        const token = await this.issueTokenPair(String(existUser._id));
        return { user: this.getUserField(existUser), ...token };
    }
    async getNewToken({ refresh }) {
        if (!refresh)
            throw new common_1.UnauthorizedException("Iltimos ro'yxatdan o'ting!");
        const result = await this.jwtService.verifyAsync(refresh);
        if (!result)
            throw new common_1.UnauthorizedException('Token muddati tugagan yoki yaroqli emas!');
        const user = await this.userModel.findById(result._id);
        const token = await this.issueTokenPair(String(user._id));
        return { user: this.getUserField(user), ...token };
    }
    async isExistUser(email) {
        const existUser = await this.userModel.findOne({ email });
        return existUser;
    }
    async issueTokenPair(userId) {
        const data = { _id: userId };
        const refresh = await this.jwtService.signAsync(data, {
            expiresIn: '15d'
        });
        const access = await this.jwtService.signAsync(data, {
            expiresIn: '1m'
        });
        return { refresh, access };
    }
    getUserField(user) {
        return {
            _id: user._id, email: user.email, fullName: user.fullName
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
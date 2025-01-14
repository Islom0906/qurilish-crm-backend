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
exports.HouseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const house_service_1 = require("./house.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorators/user.decorator");
const house_dto_1 = require("./dto/house.dto");
let HouseController = class HouseController {
    constructor(houseService) {
        this.houseService = houseService;
    }
    async getHouse(userId) {
        return this.houseService.getHouse(userId);
    }
    async getByIdHouse(id) {
        return this.houseService.getByIdHouse(id);
    }
    async creatHouse(dto, userId) {
        return this.houseService.creatHouse(dto, userId);
    }
    async updateHouse(id, dto, userId) {
        return this.houseService.updateHouse(id, dto, userId);
    }
    async deleteHouse(id) {
        return this.houseService.deleteHouse(id);
    }
};
exports.HouseController = HouseController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get house" }),
    __param(0, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "getHouse", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get by id house" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "getByIdHouse", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "House api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "House yaratish",
        type: house_dto_1.HouseDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [house_dto_1.HouseDto, String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "creatHouse", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "House api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "House o'zgartirish",
        type: house_dto_1.HouseDto
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, house_dto_1.HouseDto, String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "updateHouse", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "House api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "House o'chirish",
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "deleteHouse", null);
exports.HouseController = HouseController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('House'),
    (0, common_1.Controller)('house'),
    __metadata("design:paramtypes", [house_service_1.HouseService])
], HouseController);
//# sourceMappingURL=house.controller.js.map
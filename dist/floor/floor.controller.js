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
exports.FloorController = void 0;
const common_1 = require("@nestjs/common");
const floor_service_1 = require("./floor.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
const floor_dto_1 = require("./dto/floor.dto");
const user_decorator_1 = require("../user/decorators/user.decorator");
let FloorController = class FloorController {
    constructor(floorService) {
        this.floorService = floorService;
    }
    async getFloor(userId, houseId, limit = '10', page = '1') {
        return this.floorService.getFloor(userId, houseId, limit, page);
    }
    async getByIdFloor(id) {
        return this.floorService.getByIdFloor(id);
    }
    async creatFloor(dto, userId) {
        return this.floorService.creatFloor(dto, userId);
    }
    async updateFloor(id, dto, userId) {
        return this.floorService.updateFloor(id, dto, userId);
    }
    async deleteFloor(id) {
        return this.floorService.deleteFloor(id);
    }
};
exports.FloorController = FloorController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get floor" }),
    (0, swagger_1.ApiQuery)({ name: 'houseId', required: false, description: 'House filter with slot' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'House pagination page size', default: '10' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'House pagination page number', default: '1' }),
    __param(0, (0, user_decorator_1.UserInfo)("_id")),
    __param(1, (0, common_1.Query)("houseId")),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], FloorController.prototype, "getFloor", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get by id floor" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FloorController.prototype, "getByIdFloor", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Floor api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Floor yaratish",
        type: floor_dto_1.FloorDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [floor_dto_1.FloorDto, String]),
    __metadata("design:returntype", Promise)
], FloorController.prototype, "creatFloor", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Floor api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Floor o'zgartirish",
        type: floor_dto_1.FloorDto
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, floor_dto_1.FloorDto, String]),
    __metadata("design:returntype", Promise)
], FloorController.prototype, "updateFloor", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Floor api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Floor o'chirish",
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FloorController.prototype, "deleteFloor", null);
exports.FloorController = FloorController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Floor'),
    (0, common_1.Controller)('floor'),
    __metadata("design:paramtypes", [floor_service_1.FloorService])
], FloorController);
//# sourceMappingURL=floor.controller.js.map
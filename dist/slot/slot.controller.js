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
exports.SlotController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const slot_service_1 = require("./slot.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const slot_dto_1 = require("./dto/slot.dto");
const user_decorator_1 = require("../user/decorators/user.decorator");
let SlotController = class SlotController {
    constructor(slotService) {
        this.slotService = slotService;
    }
    async getSlot(userId, limit = '10', page = '1') {
        return this.slotService.getSlot(userId, limit, page);
    }
    async getByIdSlot(id) {
        return this.slotService.getByIdSlot(id);
    }
    async creatSlot(dto, userId) {
        return this.slotService.creatSlot(dto, userId);
    }
    async updateSlot(id, dto, userId) {
        return this.slotService.updateSlot(id, dto, userId);
    }
    async deleteSlot(id) {
        return this.slotService.deleteSlot(id);
    }
};
exports.SlotController = SlotController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get slot" }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'House pagination page size', default: '10' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'House pagination page number', default: '1' }),
    __param(0, (0, user_decorator_1.UserInfo)("_id")),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SlotController.prototype, "getSlot", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get by id slot" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SlotController.prototype, "getByIdSlot", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Slot api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Slot yaratish",
        type: slot_dto_1.SlotDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [slot_dto_1.SlotDto, String]),
    __metadata("design:returntype", Promise)
], SlotController.prototype, "creatSlot", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Slot api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Slot o'zgartirish",
        type: slot_dto_1.SlotDto
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, slot_dto_1.SlotDto, String]),
    __metadata("design:returntype", Promise)
], SlotController.prototype, "updateSlot", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Slot api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Slot o'chirish",
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SlotController.prototype, "deleteSlot", null);
exports.SlotController = SlotController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Slot'),
    (0, common_1.Controller)('slot'),
    __metadata("design:paramtypes", [slot_service_1.SlotService])
], SlotController);
//# sourceMappingURL=slot.controller.js.map
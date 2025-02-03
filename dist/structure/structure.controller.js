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
exports.StructureController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorators/user.decorator");
const structure_service_1 = require("./structure.service");
const structure_dto_1 = require("./dto/structure.dto");
let StructureController = class StructureController {
    constructor(structureService) {
        this.structureService = structureService;
    }
    async getStructure(userId) {
        return this.structureService.getStructure(userId);
    }
    async getByIdStructure(id) {
        return this.structureService.getByIdStructure(id);
    }
    async creatStructure(dto, userId) {
        return this.structureService.creatStructure(dto, userId);
    }
    async updateStructure(id, dto, userId) {
        return this.structureService.updateStructure(id, dto, userId);
    }
    async deleteStructure(id) {
        return this.structureService.deleteStructure(id);
    }
};
exports.StructureController = StructureController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get structure" }),
    __param(0, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StructureController.prototype, "getStructure", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get by id structure" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StructureController.prototype, "getByIdStructure", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Structure api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Structure yaratish",
        type: structure_dto_1.StructureDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [structure_dto_1.StructureDto, String]),
    __metadata("design:returntype", Promise)
], StructureController.prototype, "creatStructure", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Structure api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Structure o'zgartirish",
        type: structure_dto_1.StructureDto
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, structure_dto_1.StructureDto, String]),
    __metadata("design:returntype", Promise)
], StructureController.prototype, "updateStructure", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Structure api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Structure o'chirish",
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StructureController.prototype, "deleteStructure", null);
exports.StructureController = StructureController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Structure'),
    (0, common_1.Controller)('structure'),
    __metadata("design:paramtypes", [structure_service_1.StructureService])
], StructureController);
//# sourceMappingURL=structure.controller.js.map
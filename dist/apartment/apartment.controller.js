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
exports.ApartmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const apartment_service_1 = require("./apartment.service");
const user_decorator_1 = require("../user/decorators/user.decorator");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const apartment_dto_1 = require("./dto/apartment.dto");
let ApartmentController = class ApartmentController {
    constructor(apartmentService) {
        this.apartmentService = apartmentService;
    }
    async getApartment(userId, limit = '10', page = '1') {
        return this.apartmentService.getApartment(userId, limit, page);
    }
    async getByIdApartment(id) {
        return this.apartmentService.getByIdApartment(id);
    }
    async creatApartment(dto, userId) {
        return this.apartmentService.creatApartment(dto, userId);
    }
    async editApartmentPrice(dto, userId) {
        return this.apartmentService.editApartmentPrice(dto, userId);
    }
    async updateApartment(id, dto, userId) {
        return this.apartmentService.updateApartment(id, dto, userId);
    }
    async deleteApartment(id) {
        return this.apartmentService.deleteApartment(id);
    }
};
exports.ApartmentController = ApartmentController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get apartment" }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Apartment pagination page size', default: '10' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Apartment pagination page number', default: '1' }),
    __param(0, (0, user_decorator_1.UserInfo)("_id")),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ApartmentController.prototype, "getApartment", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get by id apartment" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApartmentController.prototype, "getByIdApartment", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Apartment api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Apartment yaratish",
        type: apartment_dto_1.ApartmentDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apartment_dto_1.ApartmentDto, String]),
    __metadata("design:returntype", Promise)
], ApartmentController.prototype, "creatApartment", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)("/editPrice"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Apartment narx o'zgartirish api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Apartment narx o'zgartirish ",
        type: apartment_dto_1.ApartmentEditPriceDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apartment_dto_1.ApartmentEditPriceDto, String]),
    __metadata("design:returntype", Promise)
], ApartmentController.prototype, "editApartmentPrice", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Apartment api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Apartment o'zgartirish",
        type: apartment_dto_1.ApartmentDto
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, apartment_dto_1.ApartmentDto, String]),
    __metadata("design:returntype", Promise)
], ApartmentController.prototype, "updateApartment", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Apartment api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Apartment o'chirish",
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApartmentController.prototype, "deleteApartment", null);
exports.ApartmentController = ApartmentController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Apartment'),
    (0, common_1.Controller)('apartment'),
    __metadata("design:paramtypes", [apartment_service_1.ApartmentService])
], ApartmentController);
//# sourceMappingURL=apartment.controller.js.map
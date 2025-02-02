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
let ApartmentController = class ApartmentController {
    constructor(apartmentService) {
        this.apartmentService = apartmentService;
    }
    async getApartment(userId, limit = '10', page = '1') {
        return this.apartmentService.getApartment(userId, limit, page);
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
exports.ApartmentController = ApartmentController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Apartment'),
    (0, common_1.Controller)('apartment'),
    __metadata("design:paramtypes", [apartment_service_1.ApartmentService])
], ApartmentController);
//# sourceMappingURL=apartment.controller.js.map
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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_service_1 = require("./client.service");
const user_decorator_1 = require("../user/decorators/user.decorator");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const client_dto_1 = require("./dto/client.dto");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async getClient(userId) {
        return this.clientService.getClient(userId);
    }
    async getByIdClient(id) {
        return this.clientService.getByIdClient(id);
    }
    async creatClient(dto, userId) {
        return this.clientService.creatClient(dto, userId);
    }
    async updateClient(id, dto, userId) {
        return this.clientService.updateClient(id, dto, userId);
    }
    async deleteClient(id) {
        return this.clientService.deleteClient(id);
    }
};
exports.ClientController = ClientController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get clients" }),
    __param(0, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClient", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Get by id client" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getByIdClient", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Client api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Client yaratish",
        type: client_dto_1.ClientDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_dto_1.ClientDto, String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "creatClient", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Client api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Client o'zgartirish",
        type: client_dto_1.ClientDto
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.UserInfo)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, client_dto_1.ClientDto, String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "updateClient", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOperation)({ summary: "Client api" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Client o'chirish",
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "deleteClient", null);
exports.ClientController = ClientController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Client'),
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
//# sourceMappingURL=client.controller.js.map
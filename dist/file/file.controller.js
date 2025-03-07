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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const file_dto_1 = require("./dto/file.dto");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const deleteFiles_dto_1 = require("./dto/deleteFiles.dto");
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async getMedia() {
        return this.fileService.getMedia();
    }
    async uploadFile(media) {
        return this.fileService.uploadFile(media);
    }
    async deleteFiles(dto) {
        return this.fileService.deleteFiles(dto);
    }
};
exports.FileController = FileController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('medias'),
    (0, auth_decorator_1.Auth)("superAdmin"),
    (0, swagger_1.ApiOperation)({ summary: "Get media" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FileController.prototype, "getMedia", null);
__decorate([
    (0, common_1.Post)('medias'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('media', 10)),
    (0, swagger_1.ApiOperation)({ summary: "Media yuklash" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Media yuklash",
        type: file_dto_1.FileDto
    }),
    (0, auth_decorator_1.Auth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Media file to upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                media: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        },
    }),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Delete)('medias'),
    (0, auth_decorator_1.Auth)(),
    (0, swagger_1.ApiOperation)({ summary: "Media yuklash" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Media yuklash",
        type: deleteFiles_dto_1.DeleteFilesDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteFiles_dto_1.DeleteFilesDto]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "deleteFiles", null);
exports.FileController = FileController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Media'),
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
//# sourceMappingURL=file.controller.js.map
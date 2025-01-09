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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs_extra_1 = require("fs-extra");
const app_root_path_1 = require("app-root-path");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const file_model_1 = require("./file.model");
const deleteFile_utils_1 = require("../utils/deleteFile.utils");
let FileService = class FileService {
    constructor(fileModel) {
        this.fileModel = fileModel;
    }
    async getMedia() {
        const medias = await this.fileModel.find();
        return medias;
    }
    async uploadFile(media) {
        await (0, fs_extra_1.ensureDir)(`${app_root_path_1.path}/medias`);
        await (0, fs_extra_1.writeFile)(`${app_root_path_1.path}/medias/${media.originalname}`, media.buffer);
        const file = await this.fileModel.create({
            url: `/medias/${media.originalname}`,
            name: media.originalname
        });
        return file;
    }
    async deleteFiles(dto) {
        let medias = [];
        await this.fileModel.find({ _id: { $in: dto.ids } })
            .then((documents) => {
            medias = documents;
        })
            .catch((err) => {
            return err.message;
        });
        if (medias.length === 0)
            throw new common_1.BadRequestException('File topilmadi');
        await this.fileModel.deleteMany({ _id: { $in: dto.ids } })
            .then((result) => {
        })
            .catch((error) => {
            return error.message;
        });
        await (0, deleteFile_utils_1.deleteMedias)(medias);
        return 'delete files';
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(file_model_1.File.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FileService);
//# sourceMappingURL=file.service.js.map
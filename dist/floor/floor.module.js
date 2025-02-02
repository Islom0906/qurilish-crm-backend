"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloorModule = void 0;
const common_1 = require("@nestjs/common");
const floor_controller_1 = require("./floor.controller");
const floor_service_1 = require("./floor.service");
const mongoose_1 = require("@nestjs/mongoose");
const common_module_1 = require("../common/common.module");
const floor_model_1 = require("./floor.model");
const company_model_1 = require("../company/company.model");
let FloorModule = class FloorModule {
};
exports.FloorModule = FloorModule;
exports.FloorModule = FloorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: floor_model_1.Floor.name, schema: floor_model_1.FloorSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: company_model_1.Company.name, schema: company_model_1.CompanySchema }]),
            common_module_1.CommonModule
        ],
        controllers: [floor_controller_1.FloorController],
        providers: [floor_service_1.FloorService]
    })
], FloorModule);
//# sourceMappingURL=floor.module.js.map
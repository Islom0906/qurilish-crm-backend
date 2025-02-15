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
const slot_model_1 = require("../slot/slot.model");
const house_model_1 = require("../house/house.model");
const apartment_model_1 = require("../apartment/apartment.model");
const structure_model_1 = require("../structure/structure.model");
let FloorModule = class FloorModule {
};
exports.FloorModule = FloorModule;
exports.FloorModule = FloorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: house_model_1.House.name, schema: house_model_1.HouseSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: slot_model_1.Slot.name, schema: slot_model_1.SlotSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: floor_model_1.Floor.name, schema: floor_model_1.FloorSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: apartment_model_1.Apartment.name, schema: apartment_model_1.ApartmentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: company_model_1.Company.name, schema: company_model_1.CompanySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: structure_model_1.Structure.name, schema: structure_model_1.StructureSchema }]),
            common_module_1.CommonModule
        ],
        controllers: [floor_controller_1.FloorController],
        providers: [floor_service_1.FloorService]
    })
], FloorModule);
//# sourceMappingURL=floor.module.js.map
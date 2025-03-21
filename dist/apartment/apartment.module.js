"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentModule = void 0;
const common_1 = require("@nestjs/common");
const apartment_controller_1 = require("./apartment.controller");
const apartment_service_1 = require("./apartment.service");
const mongoose_1 = require("@nestjs/mongoose");
const common_module_1 = require("../common/common.module");
const apartment_model_1 = require("./apartment.model");
const floor_model_1 = require("../floor/floor.model");
const structure_model_1 = require("../structure/structure.model");
const company_model_1 = require("../company/company.model");
const booking_model_1 = require("../booking/booking.model");
let ApartmentModule = class ApartmentModule {
};
exports.ApartmentModule = ApartmentModule;
exports.ApartmentModule = ApartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: apartment_model_1.Apartment.name, schema: apartment_model_1.ApartmentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: floor_model_1.Floor.name, schema: floor_model_1.FloorSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: structure_model_1.Structure.name, schema: structure_model_1.StructureSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: company_model_1.Company.name, schema: company_model_1.CompanySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: booking_model_1.Booking.name, schema: booking_model_1.BookingSchema }]),
            common_module_1.CommonModule
        ],
        controllers: [apartment_controller_1.ApartmentController],
        providers: [apartment_service_1.ApartmentService]
    })
], ApartmentModule);
//# sourceMappingURL=apartment.module.js.map
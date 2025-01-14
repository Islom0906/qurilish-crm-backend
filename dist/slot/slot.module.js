"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotModule = void 0;
const common_1 = require("@nestjs/common");
const slot_controller_1 = require("./slot.controller");
const slot_service_1 = require("./slot.service");
const mongoose_1 = require("@nestjs/mongoose");
const slot_model_1 = require("./slot.model");
const common_module_1 = require("../common/common.module");
let SlotModule = class SlotModule {
};
exports.SlotModule = SlotModule;
exports.SlotModule = SlotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: slot_model_1.Slot.name, schema: slot_model_1.SlotSchema }]),
            common_module_1.CommonModule
        ],
        controllers: [slot_controller_1.SlotController],
        providers: [slot_service_1.SlotService]
    })
], SlotModule);
//# sourceMappingURL=slot.module.js.map
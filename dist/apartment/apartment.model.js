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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentSchema = exports.Apartment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Apartment = class Apartment {
};
exports.Apartment = Apartment;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Apartment.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Apartment.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Floor' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Apartment.prototype, "floorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Slot' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Apartment.prototype, "slotId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'House' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Apartment.prototype, "houseId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Apartment.prototype, "isDelete", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Structure' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Apartment.prototype, "structureId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['available', 'booked', 'bought'] }),
    __metadata("design:type", Boolean)
], Apartment.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Company' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Apartment.prototype, "companyId", void 0);
exports.Apartment = Apartment = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Apartment);
exports.ApartmentSchema = mongoose_1.SchemaFactory.createForClass(Apartment);
//# sourceMappingURL=apartment.model.js.map
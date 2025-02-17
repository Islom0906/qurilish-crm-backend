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
exports.ApartmentEditPriceDto = exports.ApartmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("@nestjs/class-validator");
class ApartmentDto {
}
exports.ApartmentDto = ApartmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the apartment',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ApartmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price required',
        required: true,
        type: Number
    }),
    (0, class_validator_2.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ApartmentDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Floor ID',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], ApartmentDto.prototype, "floorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slot ID',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], ApartmentDto.prototype, "slotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'House ID',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], ApartmentDto.prototype, "houseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Structure ID',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], ApartmentDto.prototype, "structureId", void 0);
class ApartmentEditPriceDto {
}
exports.ApartmentEditPriceDto = ApartmentEditPriceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Apartment IDs',
        type: [String],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsMongoId)({ each: true }),
    __metadata("design:type", Array)
], ApartmentEditPriceDto.prototype, "apartments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price',
        required: true,
    }),
    (0, class_validator_2.IsNumber)(),
    __metadata("design:type", Number)
], ApartmentEditPriceDto.prototype, "price", void 0);
//# sourceMappingURL=apartment.dto.js.map
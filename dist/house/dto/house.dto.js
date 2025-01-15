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
exports.FilterDto = exports.HouseDto = exports.SquarePricesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const companyAndIsDelete_interface_1 = require("../../utils/companyAndIsDelete.interface");
class SquarePricesDto {
}
exports.SquarePricesDto = SquarePricesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Starting floor number',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SquarePricesDto.prototype, "startFloor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ending floor number',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SquarePricesDto.prototype, "endFloor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price per square unit',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SquarePricesDto.prototype, "price", void 0);
class HouseDto {
}
exports.HouseDto = HouseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the house',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HouseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Image file ID',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], HouseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slot ID associated with the house',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], HouseDto.prototype, "slotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of square price ranges for the house',
        type: [SquarePricesDto],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SquarePricesDto),
    __metadata("design:type", Array)
], HouseDto.prototype, "squarePrices", void 0);
class FilterDto extends companyAndIsDelete_interface_1.CompanyAndIsDeleteInterface {
}
exports.FilterDto = FilterDto;
//# sourceMappingURL=house.dto.js.map
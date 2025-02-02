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
exports.FilterFloorDto = exports.FloorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const companyAndIsDelete_interface_1 = require("../../utils/companyAndIsDelete.interface");
const class_validator_2 = require("@nestjs/class-validator");
class FloorDto {
}
exports.FloorDto = FloorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the floor',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FloorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is sale floor',
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FloorDto.prototype, "isSale", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is sale floor',
        required: true,
        nullable: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.IsNumber)(),
    __metadata("design:type", Number)
], FloorDto.prototype, "priceSqm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Image file ID',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], FloorDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slot ID associated with the house',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], FloorDto.prototype, "houseId", void 0);
class FilterFloorDto extends companyAndIsDelete_interface_1.CompanyAndIsDeleteInterface {
}
exports.FilterFloorDto = FilterFloorDto;
//# sourceMappingURL=floor.dto.js.map
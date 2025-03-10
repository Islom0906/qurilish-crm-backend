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
exports.SlotDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_validator_2 = require("class-validator");
class SlotDto {
}
exports.SlotDto = SlotDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slot nomi',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SlotDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slot tugash vaqti',
        required: true
    }),
    (0, class_validator_2.IsDateString)(),
    (0, class_validator_2.IsDate)(),
    __metadata("design:type", Date)
], SlotDto.prototype, "finishedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slot image',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.IsMongoId)(),
    __metadata("design:type", String)
], SlotDto.prototype, "image", void 0);
//# sourceMappingURL=slot.dto.js.map
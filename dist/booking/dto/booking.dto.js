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
exports.BookingDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_validator_2 = require("class-validator");
class BookingDto {
}
exports.BookingDto = BookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking kuni',
        required: true,
        enum: ['free', 'paid']
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.IsEnum)(['free', 'paid'], { message: "You enter only paid or free" }),
    __metadata("design:type", String)
], BookingDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking kuni',
        required: true
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BookingDto.prototype, "days", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking narxi',
        required: true
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BookingDto.prototype, "price", void 0);
//# sourceMappingURL=booking.dto.js.map
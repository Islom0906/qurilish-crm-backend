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
exports.CompanyDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_validator_2 = require("class-validator");
class CompanyDto {
}
exports.CompanyDto = CompanyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Company nomi',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_2.IsPhoneNumber)("UZ"),
    (0, swagger_1.ApiProperty)({
        description: 'Company telefon raqami',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Company ishchilar soni',
        required: true
    }),
    __metadata("design:type", Number)
], CompanyDto.prototype, "staffCount", void 0);
__decorate([
    (0, class_validator_2.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Companiya dostup berish',
        required: true
    }),
    __metadata("design:type", Date)
], CompanyDto.prototype, "expiredDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Company image',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Full name',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Email',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, swagger_1.ApiProperty)({
        description: 'Password',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'User image',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "imageUser", void 0);
__decorate([
    (0, class_validator_2.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        description: "Userni tug'ilgan kuni",
        required: true
    }),
    __metadata("design:type", Date)
], CompanyDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'User jinsi',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_2.IsPhoneNumber)("UZ"),
    (0, swagger_1.ApiProperty)({
        description: 'User telefon raqami',
        required: true
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "phoneUser", void 0);
//# sourceMappingURL=company.dto.js.map
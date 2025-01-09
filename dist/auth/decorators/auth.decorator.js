"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../guards/jwt.guard");
const admin_guard_1 = require("../guards/admin.guard");
const director_guard_1 = require("../guards/director.guard");
const superAdmin_guard_1 = require("../guards/superAdmin.guard");
const Auth = (role = 'staff') => {
    return (0, common_1.applyDecorators)(role === 'superAdmin' && (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, superAdmin_guard_1.OnlySuperAdminGuard)
        ||
            role === 'admin' && (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, admin_guard_1.OnlyAdminGuard)
        ||
            role === 'staff' && (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard)
        ||
            role === 'director' && (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, director_guard_1.OnlyGeneralGuard));
};
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map
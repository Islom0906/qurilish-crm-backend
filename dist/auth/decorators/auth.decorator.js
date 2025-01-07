"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../guards/jwt.guard");
const admin_guard_1 = require("../guards/admin.guard");
const general_guard_1 = require("../guards/general.guard");
const Auth = (role = 'Seller') => {
    return (0, common_1.applyDecorators)(role === 'Admin' && (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, admin_guard_1.OnlyAdminGuard)
        ||
            role === 'Seller' && (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard)
        ||
            role === 'General' && (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, general_guard_1.OnlyGeneralGuard));
};
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map
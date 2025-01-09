import {RoleUser} from "../../user/user.interface";
import {applyDecorators, UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../guards/jwt.guard";
import {OnlyAdminGuard} from "../guards/admin.guard";
import {OnlyGeneralGuard} from "../guards/director.guard";
import {OnlySuperAdminGuard} from "../guards/superAdmin.guard";

export const Auth=(role:RoleUser='staff')=>{
    return applyDecorators(
        role==='superAdmin' && UseGuards(JwtAuthGuard,OnlySuperAdminGuard)
        ||
        role==='admin' && UseGuards(JwtAuthGuard,OnlyAdminGuard)
        ||
        role==='staff'&& UseGuards(JwtAuthGuard)
        ||
        role ==='director' && UseGuards(JwtAuthGuard,OnlyGeneralGuard)
    )
}
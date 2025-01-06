import {RoleUser} from "../../user/user.interface";
import {applyDecorators, UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../guards/jwt.guard";
import {OnlyAdminGuard} from "../guards/admin.guard";
import {OnlyGeneralGuard} from "../guards/general.guard";

export const Auth=(role:RoleUser='Seller')=>{
    return applyDecorators(
        role==='Admin' && UseGuards(JwtAuthGuard,OnlyAdminGuard)
        ||
        role==='Seller'&& UseGuards(JwtAuthGuard)
        ||
        role ==='General' && UseGuards(JwtAuthGuard,OnlyGeneralGuard)
    )
}
import {CanActivate, ExecutionContext, ForbiddenException, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs";
import {UserDocument} from "../../user/user.model";

@Injectable()
export class OnlyAdminGuard implements CanActivate{
    constructor(private reflector:Reflector) {}
    canActivate(context: ExecutionContext): boolean {
        const request=context.switchToHttp().getRequest<{user:UserDocument}>();
        const user=request.user

        if (user.role !=='Admin') throw new ForbiddenException("Sizda kirish huquqi yo'q")

        return user.role ==="Admin" && true
    }
}
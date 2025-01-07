import { RoleUser } from "../../user/user.interface";
export declare const Auth: (role?: RoleUser) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

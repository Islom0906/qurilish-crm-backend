import {UserDocument} from "./user.model";

export type RoleUser= "superAdmin" |"admin" | "staff" | "director"
export type UserTypeData=keyof UserDocument
import { UserDocument } from "./user.model";
export type RoleUser = "Admin" | "Seller" | "General";
export type UserTypeData = keyof UserDocument;

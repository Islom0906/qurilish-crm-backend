import { UserDocument } from "../user/user.model";
import { Model } from "mongoose";
export declare class CommonService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getCompanyId(id: string): Promise<import("mongoose").Types.ObjectId>;
}

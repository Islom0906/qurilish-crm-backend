import { CompanyAndIsDeleteInterface } from "../../utils/companyAndIsDelete.interface";
import { Types } from "mongoose";
export declare class HouseDto {
    name: string;
    image: string;
    slotId: string;
}
export declare class FilterHouseDto extends CompanyAndIsDeleteInterface {
    slotId?: Types.ObjectId;
}

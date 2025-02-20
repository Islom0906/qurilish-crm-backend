import { CompanyAndIsDeleteInterface } from "../../utils/companyAndIsDelete.interface";
import { Types } from "mongoose";
export declare class FloorDto {
    name: string;
    isSale: boolean;
    priceSqm: number;
    image: string;
    houseId: string;
}
export declare class FilterFloorDto extends CompanyAndIsDeleteInterface {
    houseId?: Types.ObjectId;
}
export declare class FloorEditPriceDto {
    floors: string[];
    price: number;
}

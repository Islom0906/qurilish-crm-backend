import { CompanyAndIsDeleteInterface } from "../../utils/companyAndIsDelete.interface";
export declare class FloorDto {
    name: string;
    isSale: boolean;
    priceSqm: number;
    image: string;
    houseId: string;
}
export declare class FilterFloorDto extends CompanyAndIsDeleteInterface {
    houseId?: string;
}

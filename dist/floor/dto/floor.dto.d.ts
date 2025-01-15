import { CompanyAndIsDeleteInterface } from "../../utils/companyAndIsDelete.interface";
export declare class FloorDto {
    name: string;
    isSale: boolean;
    image: string;
    houseId: string;
}
export declare class FilterDto extends CompanyAndIsDeleteInterface {
    houseId?: string;
}

import { CompanyAndIsDeleteInterface } from "../../utils/companyAndIsDelete.interface";
export declare class HouseDto {
    name: string;
    image: string;
    slotId: string;
}
export declare class FilterHouseDto extends CompanyAndIsDeleteInterface {
    slotId?: string;
}

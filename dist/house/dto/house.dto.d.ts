import { CompanyAndIsDeleteInterface } from "../../utils/companyAndIsDelete.interface";
export declare class SquarePricesDto {
    startFloor: number;
    endFloor: number;
    price: string;
}
export declare class HouseDto {
    name: string;
    image: string;
    slotId: string;
    squarePrices: SquarePricesDto[];
}
export declare class FilterDto extends CompanyAndIsDeleteInterface {
    slotId?: string;
}

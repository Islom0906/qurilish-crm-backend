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

export declare class ApartmentDto {
    name: string;
    price?: string;
    floorId: string;
    slotId: string;
    houseId: string;
    structureId: string;
}
export declare class ApartmentEditPriceDto {
    apartments: string[];
    price: number;
}
export declare class ApartmentEditStatusDto {
    bookingId: string;
    clientId: string;
}

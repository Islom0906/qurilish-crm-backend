import { ClientService } from "./client.service";
import { ClientDto } from "./dto/client.dto";
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    getClient(userId: string, limit?: string, page?: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
        currentPage: number;
        totalPage: number;
        totalItems: number;
        nextPage: number;
        prewPage: number;
    }>;
    getByIdClient(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    creatClient(dto: ClientDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "phone" | "_id" | "first_name" | "last_name" | "userId">>;
    updateClient(id: string, dto: ClientDto, userId: string): Promise<Pick<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./client.model").Client> & import("./client.model").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, "companyId" | "phone" | "_id" | "first_name" | "last_name" | "userId">>;
    deleteClient(id: string): Promise<string>;
}

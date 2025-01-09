import { FileService } from "./file.service";
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(media: Express.Multer.File): Promise<import("./file.interface").FileResponse>;
}

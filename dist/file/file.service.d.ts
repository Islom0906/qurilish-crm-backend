import { FileResponse } from "./file.interface";
import { Model } from "mongoose";
import { FileDocument } from "./file.model";
export declare class FileService {
    private fileModel;
    constructor(fileModel: Model<FileDocument>);
    uploadFile(media: Express.Multer.File): Promise<FileResponse>;
}

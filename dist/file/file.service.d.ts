import { FileResponse } from "./file.interface";
import { Model } from "mongoose";
import { File, FileDocument } from "./file.model";
import { DeleteFilesDto } from "./dto/deleteFiles.dto";
export declare class FileService {
    private fileModel;
    constructor(fileModel: Model<FileDocument>);
    getMedia(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, File> & File & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, File> & File & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    uploadFile(media: Express.Multer.File): Promise<FileResponse>;
    deleteFiles(dto: DeleteFilesDto): Promise<string>;
}

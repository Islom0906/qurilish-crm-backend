import { FileService } from "./file.service";
import { DeleteFilesDto } from "./dto/deleteFiles.dto";
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    getMedia(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./file.model").File> & import("./file.model").File & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("./file.model").File> & import("./file.model").File & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    uploadFile(media: Array<Express.Multer.File>): Promise<any[]>;
    deleteFiles(dto: DeleteFilesDto): Promise<string>;
}

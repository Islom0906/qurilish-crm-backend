import {Injectable} from '@nestjs/common';
import {FileResponse} from "./file.interface";
import {ensureDir, writeFile} from 'fs-extra'
import {path} from 'app-root-path'
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {FileDocument,File} from "./file.model";

@Injectable()
export class FileService {
    constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {
    }


    async uploadFile(media: Express.Multer.File): Promise<FileResponse> {
        await ensureDir(`${path}/medias`);
        await writeFile(`${path}/medias/${media.originalname}`,media.buffer)

        const file=await this.fileModel.create({
            url: `/medias/${media.originalname}`,
            name: media.originalname
        })

        return file
    }
}

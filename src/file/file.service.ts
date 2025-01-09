import {BadRequestException, Injectable} from '@nestjs/common';
import {FileResponse} from "./file.interface";
import {ensureDir, writeFile} from 'fs-extra'
import {path} from 'app-root-path'
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {File, FileDocument} from "./file.model";
import {DeleteFilesDto} from "./dto/deleteFiles.dto";
import {deleteMedias} from "../utils/deleteFile.utils";

@Injectable()
export class FileService {
    constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {
    }

    //get

    async getMedia() {
        const medias = await this.fileModel.find()

        return medias
    }

    //post
    async uploadFile(media: Express.Multer.File): Promise<FileResponse> {
        await ensureDir(`${path}/medias`);
        await writeFile(`${path}/medias/${media.originalname}`,media.buffer)

        const file=await this.fileModel.create({
            url: `/medias/${media.originalname}`,
            name: media.originalname
        })

        return file
    }

    //delete
    async deleteFiles(dto: DeleteFilesDto) {
        let medias = []
        await this.fileModel.find({_id: {$in: dto.ids}})
            .then((documents) => {
                medias = documents
            })
            .catch((err) => {
                return err.message
            });
        if (medias.length === 0) throw new BadRequestException('File topilmadi')
        await this.fileModel.deleteMany({_id: {$in: dto.ids}})
            .then((result) => {
            })
            .catch((error) => {
                return error.message
            });
        await deleteMedias(medias)

        return 'delete files'
    }
}

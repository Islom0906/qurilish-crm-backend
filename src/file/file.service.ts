import {BadRequestException, Injectable} from '@nestjs/common';
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
    async uploadFile(media: Array<Express.Multer.File>) {
        const saveFiles = []
        await ensureDir(`${path}/medias`);
        await Promise.all(
            media.map(async (file) => {
                await writeFile(`${path}/medias/${file.originalname}`, file.buffer)
                const saveFileDb = await this.fileModel.create({
                    url: `/medias/${file.originalname}`,
                    name: file.originalname
                })
                saveFiles.push(saveFileDb)
            })
        )


        return saveFiles
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

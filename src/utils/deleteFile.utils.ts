import {FileDocument} from "../file/file.model";
import {path} from 'app-root-path'
import * as fs from "fs";

export const deleteMedias =async (medias:Array<FileDocument>) => {

    medias.forEach((media) => {
        fs.unlink(`${path}/medias/${media.name}`, (err) => {
            if (err) {
                console.log(err)
                return err
            }
        })

    })
}
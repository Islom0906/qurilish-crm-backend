"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMedias = void 0;
const app_root_path_1 = require("app-root-path");
const fs = require("fs");
const deleteMedias = async (medias) => {
    medias.forEach((media) => {
        fs.unlink(`${app_root_path_1.path}/medias/${media.name}`, (err) => {
            if (err) {
                console.log(err);
                return err;
            }
        });
    });
};
exports.deleteMedias = deleteMedias;
//# sourceMappingURL=deleteFile.utils.js.map
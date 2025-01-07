"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoDbConfig = void 0;
const getMongoDbConfig = async (configService) => {
    return {
        uri: configService.get('mongodb+srv://abdugofurovislom1:sSv5vf0rxcENiSZx@qurilish.hieyx.mongodb.net/?retryWrites=true&w=majority&appName=Qurilish')
    };
};
exports.getMongoDbConfig = getMongoDbConfig;
//# sourceMappingURL=mongo.config.js.map
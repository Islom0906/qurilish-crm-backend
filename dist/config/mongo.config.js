"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoDbConfig = void 0;
const getMongoDbConfig = async (configService) => {
    return {
        uri: configService.get('MONGODB_URI')
    };
};
exports.getMongoDbConfig = getMongoDbConfig;
//# sourceMappingURL=mongo.config.js.map
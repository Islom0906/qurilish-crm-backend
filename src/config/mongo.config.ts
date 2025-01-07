import {ConfigService} from "@nestjs/config";
import {MongooseModuleOptions} from "@nestjs/mongoose";

export const getMongoDbConfig=async (configService:ConfigService):Promise<MongooseModuleOptions>=>{

    return {
        uri:configService.get<string>('mongodb+srv://abdugofurovislom1:sSv5vf0rxcENiSZx@qurilish.hieyx.mongodb.net/?retryWrites=true&w=majority&appName=Qurilish')
    }
}
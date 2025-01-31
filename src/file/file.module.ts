import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import {path} from 'app-root-path'
import {MongooseModule} from "@nestjs/mongoose";
import {FileSchema,File} from "./file.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name:File.name,schema:FileSchema}]),
    ServeStaticModule.forRoot({
      rootPath: `${path}/medias`,
      serveRoot: '/api/medias',
    }),
  ],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}

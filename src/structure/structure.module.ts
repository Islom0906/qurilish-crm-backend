import { Module } from '@nestjs/common';
import { StructureController } from './structure.controller';
import { StructureService } from './structure.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CommonModule} from "../common/common.module";
import {Structure, StructureSchema} from "./structure.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name: Structure.name, schema: StructureSchema}]),
    CommonModule
  ],
  controllers: [StructureController],
  providers: [StructureService]
})
export class StructureModule {}

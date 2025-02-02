import { Module } from '@nestjs/common';
import { FloorController } from './floor.controller';
import { FloorService } from './floor.service';
import {MongooseModule} from "@nestjs/mongoose";
import {House, HouseSchema} from "../house/house.model";
import {CommonModule} from "../common/common.module";
import {Floor, FloorSchema} from "./floor.model";
import {Company, CompanySchema} from "../company/company.model";

@Module({
  imports:[
      MongooseModule.forFeature([{name: Floor.name, schema: FloorSchema}]),
    MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}]),
    CommonModule],
  controllers: [FloorController],
  providers: [FloorService]
})
export class FloorModule {}

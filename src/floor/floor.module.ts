import {Module} from '@nestjs/common';
import {FloorController} from './floor.controller';
import {FloorService} from './floor.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CommonModule} from "../common/common.module";
import {Floor, FloorSchema} from "./floor.model";
import {Company, CompanySchema} from "../company/company.model";
import {Slot, SlotSchema} from "../slot/slot.model";
import {House, HouseSchema} from "../house/house.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name: House.name, schema: HouseSchema}]),
    MongooseModule.forFeature([{name: Slot.name, schema: SlotSchema}]),
    MongooseModule.forFeature([{name: Floor.name, schema: FloorSchema}]),
    MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}]),
    CommonModule],
  controllers: [FloorController],
  providers: [FloorService]
})
export class FloorModule {}

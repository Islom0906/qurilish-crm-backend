import {Module} from '@nestjs/common';
import {FloorController} from './floor.controller';
import {FloorService} from './floor.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CommonModule} from "../common/common.module";
import {Floor, FloorSchema} from "./floor.model";
import {Company, CompanySchema} from "../company/company.model";
import {Slot, SlotSchema} from "../slot/slot.model";
import {Apartment, ApartmentSchema} from "../apartment/apartment.model";
import {Structure, StructureSchema} from "../structure/structure.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name: Slot.name, schema: SlotSchema}]),
    MongooseModule.forFeature([{name: Floor.name, schema: FloorSchema}]),
    MongooseModule.forFeature([{name: Apartment.name, schema: ApartmentSchema}]),
    MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}]),
    MongooseModule.forFeature([{name: Structure.name, schema: StructureSchema}]),
    CommonModule],
  controllers: [FloorController],
  providers: [FloorService]
})
export class FloorModule {}

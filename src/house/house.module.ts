import { Module } from '@nestjs/common';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Slot, SlotSchema} from "../slot/slot.model";
import {CommonModule} from "../common/common.module";
import {House, HouseSchema} from "./house.model";

@Module({
  imports:[
      MongooseModule.forFeature([{name: House.name, schema: HouseSchema}]),
    CommonModule
  ],
  controllers: [HouseController],
  providers: [HouseService]
})
export class HouseModule {}

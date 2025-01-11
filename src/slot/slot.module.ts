import { Module } from '@nestjs/common';
import { SlotController } from './slot.controller';
import { SlotService } from './slot.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Company, CompanySchema} from "../company/company.model";
import {Slot, SlotSchema} from "./slot.model";
import {CommonModule} from "../common/common.module";

@Module({
  imports:[
      MongooseModule.forFeature([{name: Slot.name, schema: SlotSchema}]),
      CommonModule
  ],
  controllers: [SlotController],
  providers: [SlotService]
})
export class SlotModule {}

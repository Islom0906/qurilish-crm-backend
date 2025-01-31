import { Module } from '@nestjs/common';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CommonModule} from "../common/common.module";
import {Apartment, ApartmentSchema} from "./apartment.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name: Apartment.name, schema: ApartmentSchema}]),
    CommonModule
  ],
  controllers: [ApartmentController],
  providers: [ApartmentService]
})
export class ApartmentModule {}

import {Module} from '@nestjs/common';
import {ApartmentController} from './apartment.controller';
import {ApartmentService} from './apartment.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CommonModule} from "../common/common.module";
import {Apartment, ApartmentSchema} from "./apartment.model";
import {Floor, FloorSchema} from "../floor/floor.model";
import {Structure, StructureSchema} from "../structure/structure.model";
import {Company, CompanySchema} from "../company/company.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name: Apartment.name, schema: ApartmentSchema}]),
    MongooseModule.forFeature([{name: Floor.name, schema: FloorSchema}]),
    MongooseModule.forFeature([{name: Structure.name, schema: StructureSchema}]),
    MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}]),

    CommonModule
  ],
  controllers: [ApartmentController],
  providers: [ApartmentService]
})
export class ApartmentModule {}

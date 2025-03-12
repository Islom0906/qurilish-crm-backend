import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Booking, BookingSchema} from "../booking/booking.model";
import {CommonModule} from "../common/common.module";
import {Client, ClientSchema} from "./client.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Client.name, schema: ClientSchema}]),
    CommonModule
  ],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}

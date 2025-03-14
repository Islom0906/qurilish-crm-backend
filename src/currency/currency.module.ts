import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Booking, BookingSchema} from "../booking/booking.model";
import {CommonModule} from "../common/common.module";
import {Currency, CurrencySchema} from "./currency.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Currency.name, schema: CurrencySchema}]),
    CommonModule
  ],
  controllers: [CurrencyController],
  providers: [CurrencyService]
})
export class CurrencyModule {}

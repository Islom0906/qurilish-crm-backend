import {Module} from '@nestjs/common';
import {BookingController} from './booking.controller';
import {BookingService} from './booking.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CommonModule} from "../common/common.module";
import {Booking, BookingSchema} from "./booking.model";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Booking.name, schema: BookingSchema}]),
        CommonModule
    ],
    controllers: [BookingController],
    providers: [BookingService]
})
export class BookingModule {
}

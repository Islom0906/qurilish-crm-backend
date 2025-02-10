import {Module} from '@nestjs/common';
import {SellerController} from './seller.controller';
import {SellerService} from './seller.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../user/user.model";
import {CommonModule} from "../common/common.module";
import {Company, CompanySchema} from "../company/company.model";

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}]),
        CommonModule],
    controllers: [SellerController],
    providers: [SellerService]
})
export class SellerModule {
}

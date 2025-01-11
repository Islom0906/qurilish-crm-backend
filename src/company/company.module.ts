import {Module} from '@nestjs/common';
import {CompanyController} from './company.controller';
import {CompanyService} from './company.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Company, CompanySchema} from "./company.model";
import {User, UserSchema} from "../user/user.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}]),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}

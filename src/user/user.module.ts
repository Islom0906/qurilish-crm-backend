import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./user.model";
import {Company, CompanySchema} from "../company/company.model";

@Module({
  imports:[
      MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

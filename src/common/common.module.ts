import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../user/user.model";

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  providers: [CommonService],
  exports:[CommonService]
})
export class CommonModule {}

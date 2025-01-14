import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./user.model";
import {Model} from "mongoose";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>) {}

    async byId(id:string){
        const user=await  this.userModel.findById(id)
            .select('-createdAt -updatedAt -__v')

        if (!user) throw new NotFoundException('Not Found User')

        return user
    }

}


import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../user/user.model";
import {Model} from "mongoose";

@Injectable()
export class CommonService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async getCompanyId(id: string) {
        const user = await this.userModel.findById(id)
        if (!user) throw new BadRequestException('Company mavjud emas')
        return user.companyId
    }
}

import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./user.model";
import {Document, Model, Types} from "mongoose";
import {Company, CompanyDocument} from "../company/company.model";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {
    }

    async byId(id: string) {
        const user = await this.userModel.findById(id)
            .select('-createdAt -updatedAt -__v').lean()
        let company:CompanyDocument | null;

        if (user.companyId) {
            company = await this.companyModel.findOne({_id: user.companyId, isDelete: false})
        }
        console.log(company)
        if (!user) throw new NotFoundException('Not Found User')
        const data = {
            ...user,
            isPriceSqm: user.companyId ? company?.isPriceSqm : null
        }
        return data
    }

}


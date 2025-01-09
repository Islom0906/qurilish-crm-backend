import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Company, CompanyDocument} from "./company.model";
import {CompanyDto} from "./dto/company.dto";

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {
    }

    // GET ALL COMPANY
    async getCompany() {
        const res = await this.companyModel.find({isDelete: false})
            .select('-createdAt -updatedAt')
            .populate('image', 'url -_id')

        return res
    }

    // POST COMPANY
    async creatCompany(dto: CompanyDto) {
        const company = await this.companyModel.create({
            ...dto,
            status: "active",
            isDelete: false
        })
        return company
    }

//     PUT COMPANY
    async updateCompany(id: string, dto: CompanyDto) {
        const comany = await this.companyModel.findByIdAndUpdate(id,
            {
                ...dto,
                isDelete: false
            },
            {new: true})
        if (!comany) throw new NotFoundException('Company topilmadi')
        return comany
    }

//     DELETE COMPANT
    async deleteCompany(id: string) {
        const findAndDelete=await this.companyModel.findOneAndUpdate({_id:id,isDelete:false},{$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Company topilmadi')
        return 'success delete'
    }
}

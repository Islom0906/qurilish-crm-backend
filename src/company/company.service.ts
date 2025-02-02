import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Company, CompanyDocument} from "./company.model";
import {CompanyDto} from "./dto/company.dto";
import {User, UserDocument} from "../user/user.model";
import {omit, pick} from 'lodash'
import {genSalt, hash} from "bcryptjs";

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {
    }

    // GET ALL COMPANY
    async getCompany(limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)


        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const getCompany = await this.companyModel.find({isDelete: false})
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .populate('logo', 'url -_id')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)

        const totalItems = await this.companyModel.countDocuments({isDelete: false})
        const  totalPage= Math.ceil(totalItems / pageSize)
        return {
            data: getCompany,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }

    // POST COMPANY
    async creatCompany(dto: CompanyDto) {
        const existUser=await this.isExistUser(dto.email)
        if (existUser) throw new BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan")
            const company = await this.companyModel.create({
                name:dto.name,
                phone:dto.phone,
                staffCount:dto.staffCount,
                expiredDate:dto.expiredDate,
                image:dto.image,
                logo:dto.logo,
                status: "active",
                isDelete: false,
                isPriceSqm:dto.isPriceSqm
            })
            const salt=await genSalt(10);
            const passwordHash=await hash(dto.password,salt)
            const companyAdmin=await this.userModel.create({
                name:dto.userName,
                sur_name:dto.sur_name,
                email:dto.email,
                password:passwordHash,
                role:'admin',
                companyId:company._id,
                image:dto.imageUser,
                birthday:dto.birthday,
                gender:dto.gender,
                phone:dto.phoneUser,
            })
            return {
                ...pick(company, ['name', 'phone', 'staffCount', 'expiredDate', 'image', 'status', '_id',"logo","isPriceSqm"]),
                ...pick(companyAdmin,['email','name','sur_name','role','image','birthday','gender','phone'])}


    }

//     PUT COMPANY
    async updateCompany(id: string, dto: CompanyDto) {


    }

//     DELETE COMPANY
    async deleteCompany(id: string) {
        const findAndDelete=await this.companyModel.findOneAndUpdate({_id:id,isDelete:false},{$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Company topilmadi')
        return 'success delete'
    }


    async isExistUser(email:string):Promise<UserDocument>{
        const existUser=await this.userModel.findOne({email})
        return existUser
    }
}

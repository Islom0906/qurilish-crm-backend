import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {User, UserDocument} from "../user/user.model";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";
import {SellerDto} from "./dto/seller.dto";
import {genSalt, hash} from "bcryptjs";
import {Company, CompanyDocument} from "../company/company.model";
import {pick} from "lodash";

@Injectable()
export class SellerService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
                private readonly commonService: CommonService) {
    }

    // get seller
    async getSeller(userId: string, limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter:CompanyAndIsDeleteInterface={isDelete: false,companyId}

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const getSeller = await this.userModel.find({companyId,role:'staff'})
            .select('-createdAt -updatedAt -isDelete')
            .populate('image','url -_id')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)
        const totalItems = await this.userModel.countDocuments({companyId,role:'staff'})
        const  totalPage= Math.ceil(totalItems / pageSize)
        return {
            data: getSeller,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }

    // GET by id seller
    async getByIdSeller(id: string) {
        const seller = await this.userModel.findOne({_id:id})
            .select('-createdAt -updatedAt -isDelete')
            .populate('image','-createdAt -updatedAt')

        if (!seller) throw new NotFoundException("Seller topilmadi")

        return seller
    }


    // POST Seller
    async creatSeller(dto: SellerDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const company =await this.companyModel.findById(companyId)


        const existUser=await this.isExistUser(dto.email)


        if (existUser) throw new BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan")

        const checkSellerCount=await this.userModel.find({companyId,role:'staff'})
        if (company.staffCount<=checkSellerCount.length) throw new BadRequestException("Siz kerakli sellerni qo'shib bo'ldingiz")



        const salt=await genSalt(10);
        const passwordHash=await hash(dto.password,salt)

        const newUser=await this.userModel.create({
            ...dto,
            role:'staff',
            companyId,
            password:passwordHash
        })



        return pick(newUser, ['_id', 'email', 'name', 'sur_name', 'image','birthday','gender','phone'])
    }

    // Update Seller
    async updateSeller(id:string,dto: SellerDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const company =await this.companyModel.findById(companyId)


        const existUser=await this.isExistUser(dto.email)


        if (existUser) throw new BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan")





        const salt=await genSalt(10);
        const passwordHash=await hash(dto.password,salt)

        const newUser=await this.userModel.findByIdAndUpdate(id,{
            ...dto,
            role:'staff',
            companyId,
            password:passwordHash
        },{new:true})



        return pick(newUser, ['_id', 'email', 'name', 'sur_name', 'image','birthday','gender','phone'])
    }

    // DELETE Seller
    async deleteSeller(id: string) {
        const findAndDelete = await this.userModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Seller topilmadi')
        return 'success delete'
    }



    async isExistUser(email:string):Promise<UserDocument>{
        const existUser=await this.userModel.findOne({email})
        return existUser
    }
}

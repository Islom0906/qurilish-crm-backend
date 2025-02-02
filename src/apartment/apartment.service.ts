import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {Apartment, ApartmentDocument} from "./apartment.model";

import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";

@Injectable()
export class ApartmentService {
    constructor(@InjectModel(Apartment.name) private apartmentModel: Model<ApartmentDocument>, private readonly commonService: CommonService) {
    }


    // get house
    async getApartment(userId: string,  limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter:CompanyAndIsDeleteInterface={isDelete: false,companyId}

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const getApartment = await this.apartmentModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)
        const totalItems = await this.apartmentModel.countDocuments(filter)
        const  totalPage= Math.ceil(totalItems / pageSize)
        return {
            data: getApartment,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }
}

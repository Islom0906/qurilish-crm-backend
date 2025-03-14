import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {Currency, CurrencyDocument} from "./currency.model";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";
import {CurrencyDto} from "./dto/currency.dto";
import {pick} from "lodash";

@Injectable()
export class CurrencyService {
    constructor(@InjectModel(Currency.name) private currencyModel: Model<CurrencyDocument>, private readonly commonService: CommonService) {
    }

    // GET ALL currency
    async getCurrency(userId: string, limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter: CompanyAndIsDeleteInterface = {isDelete: false, companyId}

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const currency = await this.currencyModel.find(filter)
            .select(' -updatedAt -isDelete')
            .sort({status: -1, createdAt: -1})
            .skip(skip)
            .limit(pageSize)


        const totalItems = await this.currencyModel.countDocuments(filter)
        const  totalPage= Math.ceil(totalItems / pageSize)

        return {
            data: currency,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }


    // POST currency
    async creatCurrency(dto: CurrencyDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        await this.currencyModel.findOneAndUpdate(
            {isDelete: false, companyId, status: true},
            {$set: {status: false}},
            {new: true})

        const currency = await this.currencyModel.create({
            ...dto,
            status: true,
            companyId,
            isDelete: false
        })
        return pick(currency, ['dollar', 'status', '_id', 'companyId'])
    }

}

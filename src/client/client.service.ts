import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";
import {Client, ClientDocument} from "./client.model";
import {pick} from "lodash";
import {ClientDto} from "./dto/client.dto";

@Injectable()
export class ClientService {
    constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>, private readonly commonService: CommonService) {
    }


    // GET ALL client
    async getClient(userId: string,limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter: CompanyAndIsDeleteInterface = {isDelete: false, companyId}

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const client = await this.clientModel.find(filter)
            .select('-createdAt -updatedAt -isDelete -companyId')
            .populate('userId','-createdAt -updatedAt -isDelete -password -companyId')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)

        const totalItems = await this.clientModel.countDocuments(filter)
        const  totalPage= Math.ceil(totalItems / pageSize)
        return {
            data: client,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }

    // GET by id client
    async getByIdClient(id: string) {
        const client = await this.clientModel.findOne({_id: id, isDelete: false})
            .select('-createdAt -updatedAt -isDelete -companyId')
            .populate('userId','-createdAt -updatedAt -isDelete -password -companyId')

        if (!client) throw new NotFoundException("Client topilmadi")

        return client
    }

    // POST client
    async creatClient(dto: ClientDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)


        const client = await this.clientModel.create({
            ...dto,
            companyId,
            userId,
            isDelete: false
        })
        return pick(client, ['first_name', 'last_name', '_id', 'phone', 'companyId','userId'])
    }

    // Edit client
    async updateClient(id: string, dto: ClientDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const client = await this.clientModel.findByIdAndUpdate(id,
            {
                ...dto,
                companyId,
                userId,
                isDelete: false
            }, {new: true}
        )

        if (!client) throw new NotFoundException('Client topilmadi')

        return pick(client, ['first_name', 'last_name', '_id', 'phone', 'companyId','userId'])
    }

    // DELETE client
    async deleteClient(id: string) {
        const findAndDelete = await this.clientModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Client topilmadi')
        return 'success delete'
    }
}

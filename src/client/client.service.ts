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
    async getClient(userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const filter: CompanyAndIsDeleteInterface = {isDelete: false, companyId}

        const client = await this.clientModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .sort({createdAt: -1})
        return client
    }

    // GET by id client
    async getByIdClient(id: string) {
        const client = await this.clientModel.findOne({_id: id, isDelete: false})
            .select('-createdAt -updatedAt -isDelete')
        if (!client) throw new NotFoundException("Client topilmadi")

        return client
    }

    // POST client
    async creatClient(dto: ClientDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)


        const client = await this.clientModel.create({
            ...dto,
            companyId,
            isDelete: false
        })
        return pick(client, ['first_name', 'last_name', '_id', 'phone', 'companyId'])
    }

    // Edit client
    async updateClient(id: string, dto: ClientDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const client = await this.clientModel.findByIdAndUpdate(id,
            {
                ...dto,
                companyId,
                isDelete: false
            }, {new: true}
        )

        if (!client) throw new NotFoundException('Client topilmadi')

        return pick(client, ['first_name', 'last_name', '_id', 'phone', 'companyId'])
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

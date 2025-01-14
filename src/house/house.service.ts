import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {House, HouseDocument} from "./house.model";
import {HouseDto} from "./dto/house.dto";
import {pick} from "lodash";

@Injectable()
export class HouseService {
    constructor(@InjectModel(House.name) private houseModel: Model<HouseDocument>, private readonly commonService: CommonService) {
    }

    // get house
    async getHouse(userId:string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const getHouse = await this.houseModel.find({isDelete: false,companyId})
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')

        return getHouse
    }

    // GET by id house
    async getByIdHouse(id: string) {
        const house = await this.houseModel.findOne({_id:id,isDelete:false})
            .select('-createdAt -updatedAt -isDelete')
            .populate('image','-createdAt -updatedAt')
            .populate('slotId','-createdAt -updatedAt -finishedDate -image -companyId -isDelete -__v')
        if (!house) throw new NotFoundException("House topilmadi")

        return house
    }

    // POST SLOT
    async creatHouse(dto: HouseDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const service = await this.houseModel.create({
            ...dto,
            companyId,
            isDelete: false
        })
        return pick(service, ['name', 'companyId', '_id', 'slotId', 'image','squarePrices'])
    }

    async updateHouse(id: string, dto: HouseDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const house = await this.houseModel.findByIdAndUpdate(id,
            {
                ...dto,
                companyId,
                isDelete: false
            },{new:true}
        )

        if (!house) throw new NotFoundException('House topilmadi')

        return pick(house, ['name', 'companyId', '_id', 'slotId', 'image','squarePrices'])
    }

    // DELETE SLOT
    async deleteHouse(id: string) {
        const findAndDelete = await this.houseModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('House topilmadi')
        return 'success delete'
    }
}

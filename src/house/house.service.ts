import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {CommonService} from "../common/common.service";
import {House, HouseDocument} from "./house.model";
import { FilterHouseDto, HouseDto} from "./dto/house.dto";
import {pick} from "lodash";

@Injectable()
export class HouseService {
    constructor(@InjectModel(House.name) private houseModel: Model<HouseDocument>, private readonly commonService: CommonService) {
    }

    // get house
    async getHouse(userId: string, slotId: string, limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter:FilterHouseDto={isDelete: false,companyId}
        if (slotId) filter.slotId=slotId

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const getHouse = await this.houseModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)
        const totalItems = await this.houseModel.countDocuments(filter)
      const  totalPage= Math.ceil(totalItems / pageSize)
        return {
            data: getHouse,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }

    // GET by id house
    async getByIdHouse(id: string) {
        const house = await this.houseModel.findOne({_id:id,isDelete:false})
            .select('-createdAt -updatedAt -isDelete')
            .populate('image','-createdAt -updatedAt')
            .populate('slotId','-createdAt -updatedAt -finishedDate -image -companyId -isDelete -__v -name')
        if (!house) throw new NotFoundException("House topilmadi")

        return house
    }

    // POST House
    async creatHouse(dto: HouseDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const service = await this.houseModel.create({
            ...dto,
            companyId,
            image:new Types.ObjectId(dto.image),
            slotId:new Types.ObjectId(dto.slotId),
            isDelete: false
        })
        return pick(service, ['name', 'companyId', '_id', 'slotId', 'image'])
    }


    // UPDATE HOUSE
    async updateHouse(id: string, dto: HouseDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const house = await this.houseModel.findByIdAndUpdate(id,
            {
                ...dto,
                companyId,
                image:new Types.ObjectId(dto.image),
                slotId:new Types.ObjectId(dto.slotId),
                isDelete: false
            },{new:true}
        )

        if (!house) throw new NotFoundException('House topilmadi')

        return pick(house, ['name', 'companyId', '_id', 'slotId', 'image'])
    }

    // DELETE House
    async deleteHouse(id: string) {
        const findAndDelete = await this.houseModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('House topilmadi')
        return 'success delete'
    }
}

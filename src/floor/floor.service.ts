import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Floor, FloorDocument} from "./floor.model";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {pick} from "lodash";
import {FilterDto, FloorDto} from "./dto/floor.dto";

@Injectable()
export class FloorService {
    constructor(@InjectModel(Floor.name) private floorModel: Model<FloorDocument>, private readonly commonService: CommonService) {
    }


    // get floor
    async getFloor(userId: string, houseId: string,limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter: FilterDto = {isDelete: false, companyId}
        if (houseId) filter.houseId = houseId

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const getFloor = await this.floorModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)

        const totalItems = await this.floorModel.countDocuments()
        const  totalPage= Math.ceil(totalItems / pageSize)

        return {
            data: getFloor,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }

    // GET by id floor
    async getByIdFloor(id: string) {
        const floor = await this.floorModel.findOne({_id:id,isDelete:false})
            .select('-createdAt -updatedAt -isDelete')
            .populate('image','-createdAt -updatedAt -isDelete ')
            .populate('houseId','-createdAt -updatedAt -image -slotId -companyId -squarePrices -isDelete -__v')
        if (!floor) throw new NotFoundException("Floor topilmadi")

        return floor
    }

    // POST SLOT
    async creatFloor(dto: FloorDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const floor = await this.floorModel.create({
            ...dto,
            companyId,
            isDelete: false
        })
        return pick(floor, ['name', 'companyId', '_id', 'houseId', 'image','isSale'])
    }

    async updateFloor(id: string, dto: FloorDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const floor = await this.floorModel.findOneAndUpdate({_id: id,
                isDelete: false},
            {
                ...dto,
                companyId,
                isDelete: false
            },{new:true}
        )

        if (!floor) throw new NotFoundException('Floor topilmadi')

        return pick(floor, ['name', 'companyId', '_id', 'houseId', 'image','isSale'])
    }

    // DELETE SLOT
    async deleteFloor(id: string) {
        const findAndDelete = await this.floorModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Floor topilmadi')
        return 'success delete'
    }
}

import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Slot, SlotDocument} from "./slot.model";
import {SlotDto} from "./dto/slot.dto";
import {CommonService} from "../common/common.service";
import {pick} from "lodash";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";

@Injectable()
export class SlotService {
    constructor(@InjectModel(Slot.name) private slotModel: Model<SlotDocument>, private readonly commonService: CommonService) {
    }

    // GET ALL Slot
    async getSlot(userId:string, limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter:CompanyAndIsDeleteInterface={isDelete: false,companyId}

        const skip = (Number(pageNumber) - 1) * Number(pageSize)


        const slot = await this.slotModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)


        const totalItems = await this.slotModel.countDocuments(filter)
        const  totalPage= Math.ceil(totalItems / pageSize)

        return {
            data: slot,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }

    // GET by id slot
    async getByIdSlot(id: string) {
        const slot = await this.slotModel.findOne({_id:id,isDelete:false})
            .select('-createdAt -updatedAt')
            .populate('image','-createdAt -updatedAt -isDelete')
        if (!slot) throw new NotFoundException("Slot topilmadi")

        return slot
    }

    // POST SLOT
    async creatSlot(dto: SlotDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const service = await this.slotModel.create({
            ...dto,
            companyId,
            isDelete: false
        })
        return pick(service, ['name', 'companyId', '_id', 'finishedDate', 'image'])
    }

    async updateSlot(id: string, dto: SlotDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const service = await this.slotModel.findByIdAndUpdate(id,
            {
                ...dto,
                companyId,
                isDelete: false
            },{new:true}
        )

        if (!service) throw new NotFoundException('Slot topilmadi')

        return pick(service, ['name', 'companyId', '_id', 'finishedDate', 'image'])
    }

    // DELETE SLOT
    async deleteSlot(id: string) {
        const findAndDelete = await this.slotModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Slot topilmadi')
        return 'success delete'
    }

}

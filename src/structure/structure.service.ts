import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommonService} from "../common/common.service";
import {Structure, StructureDocument} from "./structure.model";
import {StructureDto} from "./dto/structure.dto";
import {pick} from "lodash";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";

@Injectable()
export class StructureService {
    constructor(@InjectModel(Structure.name) private structureModel: Model<StructureDocument>, private readonly commonService: CommonService) {
    }

    // get structure
    async getStructure(userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const filter:CompanyAndIsDeleteInterface={isDelete: false,companyId}


        const getStructure = await this.structureModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('images', 'url -_id')
            .populate('floorImage', 'url -_id')
            .populate('apartmentImage', 'url -_id')
            .sort({createdAt: -1})


        return getStructure
    }

    // GET by id structure
    async getByIdStructure(id: string) {
        const structure = await this.structureModel.findOne({_id:id,isDelete:false})
            .select('-createdAt -updatedAt -isDelete')
            .populate('images','-createdAt -updatedAt')
            .populate('floorImage', '-createdAt -updatedAt')
            .populate('apartmentImage', '-createdAt -updatedAt')
        if (!structure) throw new NotFoundException("House topilmadi")

        return structure
    }

    // POST Structure
    async creatStructure(dto: StructureDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const structure = await this.structureModel.create({
            ...dto,
            companyId,
            isDelete: false
        })
        return pick(structure, ['name', 'size', '_id', 'roomCount', 'floorImage','apartmentImage','images'])
    }

    // UPDATE Structure
    async updateService(id: string, dto: StructureDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const structure = await this.structureModel.findByIdAndUpdate(id,
            {
                ...dto,
                companyId,
                isDelete: false
            },{new:true}
        )

        if (!structure) throw new NotFoundException('House topilmadi')

        return pick(structure, ['name', 'size', '_id', 'roomCount', 'floorImage','apartmentImage','images'])
    }

    // DELETE Structure
    async deleteStructure(id: string) {
        const findAndDelete = await this.structureModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('House topilmadi')
        return 'success delete'
    }
}

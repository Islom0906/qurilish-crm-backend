import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Floor, FloorDocument} from "./floor.model";
import {Model, Types} from "mongoose";
import {CommonService} from "../common/common.service";
import {pick} from "lodash";
import { FilterFloorDto, FloorDto} from "./dto/floor.dto";
import {Company, CompanyDocument} from "../company/company.model";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";
import {Slot, SlotDocument} from "../slot/slot.model";
import {House, HouseDocument} from "../house/house.model";

@Injectable()
export class FloorService {
    constructor(
        @InjectModel(Slot.name) private slotModel: Model<SlotDocument>,
        @InjectModel(House.name) private houseModel: Model<HouseDocument>,
        @InjectModel(Floor.name) private floorModel: Model<FloorDocument>,
        @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
                private readonly commonService: CommonService
    ) {
    }


    // get floor
    async getFloor(userId: string, houseId: string,limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter: FilterFloorDto = {isDelete: false, companyId}
        if (houseId) filter.houseId = houseId

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const getFloor = await this.floorModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)

        const totalItems = await this.floorModel.countDocuments(filter)
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



    // // get floor shaxmat
    async getFloorShaxmat(userId: string) {

        const companyId = await this.commonService.getCompanyId(userId)
        const filter: CompanyAndIsDeleteInterface = {isDelete: false, companyId}

        const company =await this.companyModel.findById(companyId)




        const getFloor = await this.slotModel.aggregate([
            {
                $match: { isDelete: false } // Faqat o‘chirilmagan slotlarni olish
            },
            {
                $lookup: {
                    from: "houses",
                    localField: "_id",
                    foreignField: "slotId",
                    as: "houses"
                }
            },
            {
                $addFields: {
                    houses: {
                        $filter: {
                            input: "$houses",
                            as: "house",
                            cond: { $eq: ["$$house.isDelete", false] }
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: "floors",
                    let: { houseIds: "$houses._id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $in: ["$houseId", "$$houseIds"] },
                                        { $eq: ["$isDelete", false] }
                                    ]
                                }
                            }
                        },
                        {
                            $lookup: {
                                from: "apartments",
                                let: { floorId: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $and: [
                                                    { $eq: ["$floorId", "$$floorId"] },
                                                    { $eq: ["$isDelete", false] }
                                                ]
                                            }
                                        }
                                    }
                                ],
                                as: "apartments"
                            }
                        }
                    ],
                    as: "floors"
                }
            },
            {
                $addFields: {
                    houses: {
                        $map: {
                            input: "$houses",
                            as: "house",
                            in: {
                                $mergeObjects: [
                                    "$$house",
                                    {
                                        floors: {
                                            $filter: {
                                                input: "$floors",
                                                as: "floor",
                                                cond: { $eq: ["$$floor.houseId", "$$house._id"] }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    image:1,
                    houses: {
                        _id: 1,
                        name: 1,
                        image: 1,
                        floors: {
                            _id: 1,
                            name: 1,
                            image:1,
                            priceSqm:1,
                            isSale:1,
                            apartments: {
                                _id: 1,
                                name: 1,
                                price: 1
                            }
                        }
                    }
                }
            },
            {
                $unset: "floors"
            }
        ])


        return getFloor
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

        const company =await this.companyModel.findById(companyId)
        const floor = await this.floorModel.create({
            ...dto,
            companyId,
            houseId:new Types.ObjectId(dto.houseId),
            image:new Types.ObjectId(dto.image),
            priceSqm : company.isPriceSqm ? dto.priceSqm : null,
            isDelete: false
        })
        return pick(floor, ['name', 'companyId', '_id', 'houseId', 'image','isSale','priceSqm'])
    }

    // update floor
    async updateFloor(id: string, dto: FloorDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const company =await this.companyModel.findById(companyId)



        const floor = await this.floorModel.findOneAndUpdate({_id: id,
                isDelete: false},
            {
                ...dto,
                companyId,
                houseId:new Types.ObjectId(dto.houseId),
                image:new Types.ObjectId(dto.image),
                priceSqm:company.isPriceSqm ? dto.priceSqm: null,
                isDelete: false
            },{new:true}
        )

        if (!floor) throw new NotFoundException('Floor topilmadi')

        return pick(floor, ['name', 'companyId', '_id', 'houseId', 'image','isSale','priceSqm'])
    }

    // DELETE Flor
    async deleteFloor(id: string) {
        const findAndDelete = await this.floorModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('Floor topilmadi')
        return 'success delete'
    }
}

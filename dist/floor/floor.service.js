"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const floor_model_1 = require("./floor.model");
const mongoose_2 = require("mongoose");
const common_service_1 = require("../common/common.service");
const lodash_1 = require("lodash");
const company_model_1 = require("../company/company.model");
const slot_model_1 = require("../slot/slot.model");
const apartment_model_1 = require("../apartment/apartment.model");
const structure_model_1 = require("../structure/structure.model");
let FloorService = class FloorService {
    constructor(slotModel, apartmentModel, floorModel, companyModel, structureModel, commonService) {
        this.slotModel = slotModel;
        this.apartmentModel = apartmentModel;
        this.floorModel = floorModel;
        this.companyModel = companyModel;
        this.structureModel = structureModel;
        this.commonService = commonService;
    }
    async getFloor(userId, houseId, limit, page) {
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        if (houseId)
            filter.houseId = new mongoose_2.Types.ObjectId(houseId);
        const skip = (Number(pageNumber) - 1) * Number(pageSize);
        const getFloor = await this.floorModel.find(filter)
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', 'url -_id')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(pageSize);
        const totalItems = await this.floorModel.countDocuments(filter);
        const totalPage = Math.ceil(totalItems / pageSize);
        return {
            data: getFloor,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage: pageNumber < totalPage ? pageNumber + 1 : null,
            prewPage: pageNumber > 1 ? pageNumber - 1 : null
        };
    }
    async getFloorShaxmat(userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const filter = { isDelete: false, companyId };
        const company = await this.companyModel.findById(companyId);
        const pipeline = [
            {
                $match: { isDelete: false }
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
                                    },
                                    {
                                        $lookup: {
                                            from: "structures",
                                            localField: "structureId",
                                            foreignField: "_id",
                                            as: "structure"
                                        }
                                    },
                                    {
                                        $addFields: {
                                            structure: {
                                                $cond: {
                                                    if: { $gt: [{ $size: "$structure" }, 0] },
                                                    then: {
                                                        _id: { $arrayElemAt: ["$structure._id", 0] },
                                                        name: { $arrayElemAt: ["$structure.name", 0] }
                                                    },
                                                    else: null
                                                }
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
                    houses: {
                        _id: 1,
                        name: 1,
                        floors: {
                            _id: 1,
                            name: 1,
                            priceSqm: 1,
                            isSale: 1,
                            apartments: {
                                _id: 1,
                                name: 1,
                                structure: 1
                            }
                        }
                    }
                }
            },
            {
                $unset: "floors"
            }
        ];
        if (company.isPriceSqm) {
            pipeline.push({ $unset: "houses.floors.apartments" });
        }
        const getFloor = await this.slotModel.aggregate(pipeline);
        return getFloor;
    }
    async getByIdFloor(id) {
        const floor = await this.floorModel.findOne({ _id: id, isDelete: false })
            .select('-createdAt -updatedAt -isDelete')
            .populate('image', '-createdAt -updatedAt -isDelete ')
            .populate('houseId', '-createdAt -updatedAt -image -slotId -companyId -squarePrices -isDelete -__v');
        if (!floor)
            throw new common_1.NotFoundException("Floor topilmadi");
        return floor;
    }
    async creatFloor(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const company = await this.companyModel.findById(companyId);
        const floor = await this.floorModel.create({
            ...dto,
            companyId,
            houseId: new mongoose_2.Types.ObjectId(dto.houseId),
            image: new mongoose_2.Types.ObjectId(dto.image),
            priceSqm: company.isPriceSqm ? dto.priceSqm : null,
            isDelete: false
        });
        return (0, lodash_1.pick)(floor, ['name', 'companyId', '_id', 'houseId', 'image', 'isSale', 'priceSqm']);
    }
    async editFloorPrice(dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const company = await this.companyModel.findOne({ _id: companyId, isDelete: false }).lean();
        if (!company.isPriceSqm)
            throw new common_1.BadRequestException("Siz narxlarni kvadrat metr bo'yicha kiritasiz");
        const filter = { isDelete: false, companyId };
        const resultFloor = await this.floorModel.bulkWrite(dto.floors.map(id => ({
            updateOne: {
                filter: { _id: id, ...filter },
                update: { $set: { priceSqm: dto.price } }
            }
        })));
        if (resultFloor.modifiedCount === 0)
            throw new common_1.NotFoundException('Floors topilmadi');
        const floorObjectIds = dto.floors.map(id => new mongoose_2.Types.ObjectId(id));
        const apartments = await this.apartmentModel.find({ floorId: { $in: floorObjectIds }, ...filter }).lean();
        const bulkApartmentUpdates = await Promise.all(apartments.map(async (apartment) => {
            const structure = await this.structureModel.findOne({ _id: apartment.structureId, ...filter });
            if (!structure || !structure.size)
                return null;
            return {
                updateOne: {
                    filter: { _id: apartment._id },
                    update: { $set: { price: dto.price * structure.size } }
                }
            };
        }));
        const resultApartment = await this.apartmentModel.bulkWrite(bulkApartmentUpdates.filter(Boolean));
        console.log(resultFloor.modifiedCount);
        return 'success';
    }
    async updateFloor(id, dto, userId) {
        const companyId = await this.commonService.getCompanyId(userId);
        const company = await this.companyModel.findById(companyId);
        const floor = await this.floorModel.findOneAndUpdate({ _id: id,
            isDelete: false }, {
            ...dto,
            companyId,
            houseId: new mongoose_2.Types.ObjectId(dto.houseId),
            image: new mongoose_2.Types.ObjectId(dto.image),
            priceSqm: company.isPriceSqm ? dto.priceSqm : null,
            isDelete: false
        }, { new: true });
        if (!floor)
            throw new common_1.NotFoundException('Floor topilmadi');
        return (0, lodash_1.pick)(floor, ['name', 'companyId', '_id', 'houseId', 'image', 'isSale', 'priceSqm']);
    }
    async deleteFloor(id) {
        const findAndDelete = await this.floorModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, { $set: { isDelete: true } }, { new: true });
        if (!findAndDelete)
            throw new common_1.NotFoundException('Floor topilmadi');
        return 'success delete';
    }
};
exports.FloorService = FloorService;
exports.FloorService = FloorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(slot_model_1.Slot.name)),
    __param(1, (0, mongoose_1.InjectModel)(apartment_model_1.Apartment.name)),
    __param(2, (0, mongoose_1.InjectModel)(floor_model_1.Floor.name)),
    __param(3, (0, mongoose_1.InjectModel)(company_model_1.Company.name)),
    __param(4, (0, mongoose_1.InjectModel)(structure_model_1.Structure.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        common_service_1.CommonService])
], FloorService);
//# sourceMappingURL=floor.service.js.map
import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {CommonService} from "../common/common.service";
import {Apartment, ApartmentDocument} from "./apartment.model";
import {CompanyAndIsDeleteInterface} from "../utils/companyAndIsDelete.interface";
import {ApartmentDto, ApartmentEditPriceDto, ApartmentEditStatusDto} from "./dto/apartment.dto";
import {pick} from "lodash";
import {Floor, FloorDocument} from "../floor/floor.model";
import {Company, CompanyDocument} from "../company/company.model";
import {Structure, StructureDocument} from "../structure/structure.model";
import {Booking, BookingDocument} from "../booking/booking.model";
import * as dayjs from "dayjs";
import {Cron} from "@nestjs/schedule";

@Injectable()
export class ApartmentService {
    constructor(
        @InjectModel(Apartment.name) private apartmentModel: Model<ApartmentDocument>,
        @InjectModel(Floor.name) private floorModel: Model<FloorDocument>,
        @InjectModel(Structure.name) private structureModel: Model<StructureDocument>,
        @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
        @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
        private readonly commonService: CommonService
    ) {
    }


    // get house
    async getApartment(userId: string,  limit: string, page: string) {
        const pageNumber=parseInt(page,10)
        const pageSize=parseInt(limit,10)

        const companyId = await this.commonService.getCompanyId(userId)
        const filter:CompanyAndIsDeleteInterface={isDelete: false,companyId}

        const skip = (Number(pageNumber) - 1) * Number(pageSize)

        const getApartment = await this.apartmentModel.find(filter)
            .select('-createdAt -updatedAt -isDelete -clientId -bookingExpiresAt -lastBookingDate -bookingId')
            .populate('floorId','_id name')
            .populate('slotId','_id name')
            .populate('houseId','_id name')
            .populate('structureId','_id name')
            .sort({createdAt: -1})
            .skip(skip)
            .limit(pageSize)
        const totalItems = await this.apartmentModel.countDocuments(filter)
        const  totalPage= Math.ceil(totalItems / pageSize)
        return {
            data: getApartment,
            currentPage: pageNumber,
            totalPage: totalPage,
            totalItems,
            nextPage:pageNumber<totalPage?pageNumber+1:null,
            prewPage:pageNumber>1?pageNumber-1:null
        }
    }

    // GET by id apartment
    async getByIdApartment(id: string) {
        const apartment = await this.apartmentModel.findOne({_id:id,isDelete:false})
            .select('-createdAt -updatedAt -isDelete')
            .populate('floorId','_id name')
            .populate('slotId', '_id name')
            .populate('houseId', '_id name')
            .populate('structureId', '_id name')
            .populate('clientId', '-createdAt -updatedAt -isDelete -userId -companyId')
            .populate('bookingId', '-createdAt -updatedAt -isDelete -companyId')
        if (!apartment) throw new NotFoundException("House topilmadi")

        return apartment
    }

    // POST Apartment
    async creatApartment(dto: ApartmentDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const checkName=await this.apartmentModel.findOne({
            slotId:new Types.ObjectId(dto.slotId),
            houseId:new Types.ObjectId(dto.houseId),
            floorId:new Types.ObjectId(dto.floorId),
            name:dto.name,
            isDelete:false
        })
        if (checkName) throw new BadRequestException("Xonani nomi takrorlanmasligi kerak")

        const company = await this.companyModel.findOne({_id: companyId, isDelete: false})
        if (!company) throw new BadRequestException('Company topilmadi')
        const floor = await this.floorModel.findOne({_id: dto.floorId, companyId, isDelete: false})
        if (!floor) throw new BadRequestException('Floor topilmadi')

        const structure = await this.structureModel.findOne({_id: dto.structureId, companyId, isDelete: false})
        if (!structure) throw new BadRequestException('Structure topilmadi')


        const apartment = await this.apartmentModel.create({
            ...dto,
            companyId,
            floorId: new Types.ObjectId(dto.floorId),
            slotId: new Types.ObjectId(dto.slotId),
            houseId: new Types.ObjectId(dto.houseId),
            structureId: new Types.ObjectId(dto.structureId),
            clientId: null,
            bookingExpiresAt: null,
            lastBookingDate: null,
            status:'available',
            price: company.isPriceSqm ? floor.priceSqm * structure.size : dto.price,
            isDelete: false
        })
        return pick(apartment, ['name',  '_id','price', 'floorId','slotId','houseId','structureId','status'])
    }

    async editApartmentPrice(dto: ApartmentEditPriceDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const filter: CompanyAndIsDeleteInterface = {isDelete: false, companyId}
        const company=await this.companyModel.findOne({_id:companyId,isDelete:false}).lean()

        if (company.isPriceSqm) throw new BadRequestException("Siz narxlarni kvadrat metr bo'yicha kiritasiz")

       const result= await this.apartmentModel.bulkWrite(
            dto.apartments.map(id=>({
                updateOne:{
                    filter:{_id:id,...filter},
                    update:{$set:{price:dto.price}}
                }
            }))
        )

        if (result.modifiedCount === 0) throw new NotFoundException('Apartment topilmadi')
        return 'success'

    }


    async editApartmentStatus(id, dto: ApartmentEditStatusDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)

        const bookingGet = await this.bookingModel.findOne({
            isDelete: false,
            companyId,
            _id: new Types.ObjectId(dto.bookingId)
        })
        if (!bookingGet) throw new NotFoundException('Not Found booking')

        const bookingExpiresAt = dayjs().add(bookingGet.days, 'day').toDate()
        const apartmentStatus = await this.apartmentModel.findByIdAndUpdate(
            id,
            {
                $set: {
                    clientId: new Types.ObjectId(dto.clientId),
                    bookingId: new Types.ObjectId(dto.bookingId),
                    lastBookingDate: new Date(),
                    bookingExpiresAt,
                    status: 'booked'
                }
            },
            {new: true})
        return apartmentStatus

    }

    // UPDATE Apartment
    async updateApartment(id: string, dto: ApartmentDto, userId: string) {
        const companyId = await this.commonService.getCompanyId(userId)
        const checkName=await this.apartmentModel.findOne({slotId:dto.slotId,houseId:dto.houseId,floorId:dto.floorId,name:dto.name,isDelete:false})

        const oldApartment = await this.apartmentModel.findById(id).lean()

        if (checkName&& checkName._id.toString()!==id) throw new BadRequestException("Xonani nomi takrorlanmasligi kerak")
        const apartment = await this.apartmentModel.findByIdAndUpdate(id,
            {
                ...dto,
                companyId,
                floorId: new Types.ObjectId(dto.floorId),
                slotId: new Types.ObjectId(dto.slotId),
                houseId: new Types.ObjectId(dto.houseId),
                structureId: new Types.ObjectId(dto.structureId),
                status: oldApartment.status,
                price: oldApartment.price,
                clientId: oldApartment.clientId,
                bookingExpiresAt: oldApartment.bookingExpiresAt,
                lastBookingDate: oldApartment.lastBookingDate,
                isDelete: false
            },{new:true}
        )

        if (!apartment) throw new NotFoundException('Apartment topilmadi')

        return pick(apartment, ['name',  '_id','price', 'floorId','slotId','houseId','structureId','status'])

    }

    // DELETE Structure
    async deleteApartment(id: string) {
        const findAndDelete = await this.apartmentModel.findOneAndUpdate({
            _id: id,
            isDelete: false
        }, {$set: {isDelete: true}}, {new: true})
        if (!findAndDelete) throw new NotFoundException('House topilmadi')
        return 'success delete'
    }


//     Cron job
    @Cron('0 * * * *')
    async checkBookingExpiration() {
        const now = new Date();

        await this.apartmentModel.updateMany(
            {
                bookingExpiresAt: {$lt: now},
                status: 'booked',
                isDelete: false
            },
            {$set: {status: 'available'}}
        );
    }
}

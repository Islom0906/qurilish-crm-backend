import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {Model} from "mongoose";
import {User, UserDocument} from "../user/user.model";
import {InjectModel} from "@nestjs/mongoose";
import {RegisterDto} from "./dto/registerDto";
import {compare, genSalt, hash} from 'bcryptjs';
import {LoginDto} from "./dto/login.dto";
import {JwtService} from "@nestjs/jwt";
import {TokenDto} from "./dto/token.dto";

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,private readonly jwtService:JwtService) {}

    // REGISTER SERVICE
    async register(dto:RegisterDto){
    const existUser=await this.isExistUser(dto.email)
        if (existUser) throw new BadRequestException("Bu email bilan foydalanuvchi allaqachon ro'yxatdam o'tgan")

        const salt=await genSalt(10);
        const passwordHash=await hash(dto.password,salt)

        const newUser=await this.userModel.create({
            ...dto,
            password:passwordHash
        })

        const token=await this.issueTokenPair(String(newUser._id))

        return {user:this.getUserField(newUser),...token}
    }

    // LOGIN SERVICE
    async login(dto:LoginDto){
        const existUser=await this.isExistUser(dto.email)
        if (!existUser) throw new BadRequestException('Foydalanuvchi topilmadi')

        const currentPassword = await compare(dto.password,existUser.password)
        if (!currentPassword) throw new BadRequestException("Parol notog'ri")
        const token=await this.issueTokenPair(String(existUser._id))

        return {user:this.getUserField(existUser),...token}

    }

    //  NEW TOKEN

    async getNewToken({refreshToken}:TokenDto){
        if (!refreshToken) throw new UnauthorizedException("Iltimos ro'yxatdan o'ting!")

        const result=await this.jwtService.verifyAsync(refreshToken)

        if (!result) throw new UnauthorizedException('Token muddati tugagan yoki yaroqli emas!')

        const user =await this.userModel.findById(result._id)

        const token=await this.issueTokenPair(String(user._id))
        return {user:this.getUserField(user),...token}

    }



    async isExistUser(email:string):Promise<UserDocument>{
        const existUser=await this.userModel.findOne({email})
        return existUser
    }

    async issueTokenPair(userId:string){
        const data={_id:userId}


        const refreshToken=await this.jwtService.signAsync(data,{
            expiresIn:'15d'
        })

        const accessToken=await this.jwtService.signAsync(data,{
            expiresIn:'1m'
        })

        return {refreshToken,accessToken}
    }

    getUserField(user:UserDocument){
        return{
            _id:user._id,email:user.email,fullName:user.fullName
        }
    }

}
import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {ConfigModule, ConfigService} from '@nestjs/config'
import {MongooseModule} from "@nestjs/mongoose";
import {getMongoDbConfig} from "./config/mongo.config";
import {AuthModule} from './auth/auth.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import { FileModule } from './file/file.module';
import { CompanyModule } from './company/company.module';
import { SlotModule } from './slot/slot.module';
import { CommonModule } from './common/common.module';
import { HouseModule } from './house/house.module';
import { FloorModule } from './floor/floor.module';
import { ApartmentModule } from './apartment/apartment.module';
import { StructureModule } from './structure/structure.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    MongooseModule.forRootAsync({
    imports:[ConfigModule],

    inject:[ConfigService],
    useFactory:getMongoDbConfig
    }),
    UserModule,
    AuthModule,
    FileModule,
    CompanyModule,
    SlotModule,
    CommonModule,
    HouseModule,
    FloorModule,
    ApartmentModule,
    StructureModule,
    SellerModule
  ],
})
export class AppModule {}

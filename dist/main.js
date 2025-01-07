"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
async function bootstrap() {
    try {
        const app = express();
        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, app);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Qurilish CRM')
            .setDescription('The Qurilish API description')
            .setVersion('1.0.0')
            .addBearerAuth()
            .build();
        const documentFactory = () => swagger_1.SwaggerModule.createDocument(nestApp, config);
        swagger_1.SwaggerModule.setup('api', nestApp, documentFactory());
        await nestApp.listen(process.env.PORT || 3000);
        console.log('App listening...');
    }
    catch (error) {
        console.error('Error during app bootstrap:', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
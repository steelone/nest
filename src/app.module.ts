import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [ProductModule, MongooseModule.forRoot(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0.qae0n.azure.mongodb.net/products?retryWrites=true&w=majority`)],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}

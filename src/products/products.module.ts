import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { Product, ProductSchema } from "./schemas/product.schema";

@Module({
    providers:[ProductService],
    controllers: [ProductsController],
    imports:[MongooseModule.forFeature([
        {name: Product.name, schema: ProductSchema}
    ])]
})
export class ProductModule {

}
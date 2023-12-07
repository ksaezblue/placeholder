import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./schemas/order.schema";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { OrderRepository } from "./order.repository";
import { MongoModule } from "./db/mongo/mongo.module";

@Module({
    //imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    imports: [MongoModule],
    controllers: [OrderController],
    providers: [/*OrderService/*, OrderRepository*/],
})
export class OrderModule {

}

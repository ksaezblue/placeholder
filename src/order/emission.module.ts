import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./schemas/order.schema";
import { OrderController } from "./emission.controller";
import { OrderService } from "./emission.service";
import { OrderRepository } from "./emission.repository";
import { MongoModule } from "./db/mongo/mongo.module";

@Module({
    //imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    imports: [MongoModule],
    controllers: [OrderController],
    providers: [/*OrderService/*, OrderRepository*/],
})
export class OrderModule {

}

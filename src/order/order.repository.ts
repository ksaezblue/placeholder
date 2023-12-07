import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderDocument } from "./schemas/order.schema";

@Injectable()
export class OrderRepository {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}
    
    async findByOrderId(orderIdRequest: string): Promise<Order[]>{
        return await this.orderModel.find({orderId: orderIdRequest});
    }

}
import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from 'src/order/schemas/order.schema';

@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrderRepository) {}

    async getOrderById(orderId: string): Promise<Order[]> {
        return this.orderRepository.findByOrderId(orderId)
    }
}
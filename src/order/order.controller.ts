import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get('/:orderId')
    async findOne(@Param('orderId') orderId: string) {
        const order = await this.orderService.getOrderById(orderId);
        if (!Object.keys(order).length){
            throw new HttpException('',HttpStatus.NO_CONTENT);
        }
    return { result: order };
    }

}
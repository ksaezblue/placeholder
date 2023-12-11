import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { OrderService } from './emission.service';
import { activate, emission } from './mock/mockResult';
import { CreateEmissionDto } from './create-emission.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get('/:orderId/activate')
    async findOne(@Param('orderId') orderId: string) {
        const response = activate()
    return { result: response };
    }

    @Post('/emission')
    async generateNewOrder(@Body() createEmissionDto: CreateEmissionDto) {
        const response = emission()

    return { result: response };
    }

}
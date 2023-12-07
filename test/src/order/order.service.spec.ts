import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderService } from '../../../src/order/order.service';
import { Order } from '../../../src/order/schemas/order.schema';
import { OrderRepository } from '../../../src/order/order.repository';

describe('BookService', () => {
  let orderService: OrderService;
  let orderRepository: OrderRepository;
  let model: Model<Order>;

  const mockOrder = {
    orderId: '8523145698',
    emissionDate: '01/11/2023 15:32:45',
  };


  const mockOrderService = {
    getOrderById: jest.fn(),
    find: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        OrderRepository,
        {
          provide: getModelToken(Order.name),
          useValue: mockOrderService,
        },
      ],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
    model = module.get<Model<Order>>(getModelToken(Order.name));
  });

  describe('getOrderById', () => {
    it('should return a order by its orderId', async () => {
        jest.spyOn(model, 'find').mockImplementation()

        const result = await orderService.getOrderById(mockOrder.orderId)

        expect(model.find).toHaveBeenCalledWith({orderId: mockOrder.orderId})
    })
  })
})
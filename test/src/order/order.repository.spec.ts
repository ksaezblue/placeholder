import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../../../src/order/schemas/order.schema'
import { OrderRepository } from '../../../src/order/emission.repository';

describe('OrderRepository', () => {
  let orderRepository: OrderRepository;
  let model: Model<Order>;

  const mockOrder = {
    orderId: '8523145698',
    emissionDate: '01/11/2023 15:32:45',
  };


  const mockOrderRepository = {
    findByOrderId: jest.fn(),
    find: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderRepository,
        {
          provide: getModelToken(Order.name),
          useValue: mockOrderRepository,
        },
      ],
    }).compile();

    orderRepository = module.get<OrderRepository>(OrderRepository);
    model = module.get<Model<Order>>(getModelToken(Order.name));
  });

  describe('findByOrderId', () => {
    it('should return a order by its orderId', async () => {
        jest.spyOn(model, 'find').mockImplementation()

        const result = await orderRepository.findByOrderId(mockOrder.orderId)

        expect(model.find).toHaveBeenCalledWith({orderId: mockOrder.orderId})
    })
  })

})
import { Test, TestingModule } from "@nestjs/testing";
import { OrderController } from "../../../src/order/emission.controller";
import { OrderRepository } from "../../../src/order/emission.repository";
import { OrderService } from "../../../src/order/emission.service";
import { Order } from "../../../src/order/schemas/order.schema";

describe('OrderController', () => {
    let orderController: OrderController
    let orderService: OrderService
    let orderRepository: OrderRepository

    const mockOrder = {
        orderId: '8523145698',
        emissionDate: '01/11/2023 15:32:45',
    };

    const mockOrderService = {
        getOrderById: jest.fn().mockResolvedValue(mockOrder),
        find: jest.fn().mockResolvedValueOnce(mockOrder),
      };
    

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [OrderController],
          providers: [
            {
              provide: OrderService,
              useValue: mockOrderService,
            },
          ],
        }).compile();

        orderService = module.get<OrderService>(OrderService);
        orderController = module.get<OrderController>(OrderController);
    })

    it('should be defined', () => {
        expect(orderController).toBeDefined();
      });
    
    describe('findOne', () => {
      it('should get and order by ID', async () => {
        const result = await orderController.findOne(mockOrder.orderId);
        
        expect(orderService.getOrderById).toHaveBeenCalled();
      });
    });

})
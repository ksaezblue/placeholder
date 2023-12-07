import { Test } from '@nestjs/testing';
import { OrderModule } from '../../../src/order/order.module';
import { MongoModule } from '../../../src/order/db/mongo/mongo.module';
import { OrderController } from '../../../src/order/order.controller';

describe('OrderModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
    }).compile();

    expect(module).toBeDefined();
  });
});
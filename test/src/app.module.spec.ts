import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { AppController } from '../../src/app.controller';
import { HealthModule } from '../../src/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from '../../src/order/emission.module';

describe('AppModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
    }).compile();

    expect(module).toBeDefined();
  });
});
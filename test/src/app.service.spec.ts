import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppService } from '../../src/app.service';

describe('AppService', () => {
  let appService: AppService;

  const mockAppService = {
    getHello: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  describe('getHello', () => {

    it('should return a hello world', async () => {
        const result = await appService.getHello()

        expect(result).toBe('Hello World!')
    })
  })
})
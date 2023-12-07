import { Test, TestingModule } from "@nestjs/testing";
import { HealthController } from "../../../src/health/health.controller";
import { HealthCheckService, HttpHealthIndicator, TerminusModule } from "@nestjs/terminus";
import { HealthModule } from "../../../src/health/health.module";

describe('HealthController', () => {
    let healthController: HealthController

    const mockHttpService = {
        
    };
    const mockHealthCheckService = {
        check: jest.fn()
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HealthController],
            providers: [
              {
                provide: HttpHealthIndicator,
                useValue: mockHttpService,
              },
              {
                provide: HealthCheckService,
                useValue: mockHealthCheckService,
              }
            ],
          }).compile();

        healthController = module.get<HealthController>(HealthController);
    })

    it('should be defined', () => {
        expect(healthController).toBeDefined();
      });
    
    describe('liveness', () => {
      it('should return OK', async () => {

        const result = await healthController.liveness();

        expect(result).toEqual("OK");
      });
    });

    describe('check', () => {
        it('should return a ping check', async () => {
          
          const result = await healthController.check();
  
          expect(mockHealthCheckService.check).toHaveBeenCalled();
        });
    });

})
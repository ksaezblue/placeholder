import { Test, TestingModule } from "@nestjs/testing";
import { HealthCheckService, HttpHealthIndicator, TerminusModule } from "@nestjs/terminus";
import { AppController } from "../../src/app.controller";
import { AppService } from "../../src/app.service";

describe('AppController', () => {
    let appController: AppController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
          }).compile();

          appController = module.get<AppController>(AppController);
    })

    it('should be defined', () => {
        expect(appController).toBeDefined();
      });
    
    describe('getHello', () => {
      it('should return OK', async () => {
        const result = await appController.getHello()

        expect(result).toBe('Hello World!')
      });
    })

})
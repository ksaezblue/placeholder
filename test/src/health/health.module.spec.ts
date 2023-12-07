import { Test } from '@nestjs/testing';
import { HealthModule } from '../../../src/health/health.module'
import { HealthController } from '../../../src/health/health.controller';
import { TerminusModule } from '@nestjs/terminus';

describe('HealthModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(HealthController)).toBeInstanceOf(HealthController);
    expect(module.get(TerminusModule)).toBeInstanceOf(TerminusModule);
  });
});
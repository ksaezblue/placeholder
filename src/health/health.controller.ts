import { Controller, Get, HttpCode } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

@Controller('/health')
export class HealthController {
  constructor(private readonly health: HealthCheckService, private http: HttpHealthIndicator) {}

  @Get('liveness')
  @HttpCode(200)
  liveness() {
    return 'OK';
  }

  // TODO: 
  @Get('readiness')
  @HealthCheck()
  check() {
    return this.health.check([() => this.http.pingCheck('ms-consultas-orden-api', 'https://bluex.cl')]);
  }
}

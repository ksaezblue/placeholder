import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/emission.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HealthModule } from './health/health.module';

@Module({  
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // ignoreEnvFile: false, 
      // load: [dbConfig],
      // envFilePath: ['.env'], /* con ignoreEnvFile: false */
    }), 
    OrderModule,
    HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

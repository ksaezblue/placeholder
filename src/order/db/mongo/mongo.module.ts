import { MongooseModule } from '@nestjs/mongoose';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Order, OrderSchema } from './../.././schemas/order.schema';
import { MongoService } from './config/mongoose.config';
import { OrderService } from './../../order.service';
import { OrderRepository } from './../../order.repository';

@Module({
  imports: [
    //ConfigModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoService,
    })
  ],
  providers: [OrderService, OrderRepository, Logger],
  exports: [OrderService, Logger],
})
export class MongoModule {}
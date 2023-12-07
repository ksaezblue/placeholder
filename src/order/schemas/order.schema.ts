import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Cod } from '../entities/cod.entity';
import { Dd } from '../entities/dd.entity';
import { Insurance } from '../entities/insurance.entity';
import { Package } from '../entities/package.entity';
import { Seller } from '../entities/seller.entity';
import { Shipping } from '../entities/shipping.entity';
import { TaxDocument } from '../entities/taxDocument.entity';
import { Buyer } from '../entities/buyer.entity';

export type OrderDocument = Order & Document;

@Schema({ collection: 'orders-readonly' })
export class Order {
    @Prop()
    orderId: string;

    @Prop()
    emissionDate: Date;

    @Prop()
    quantityPackages: number;

    @Prop()
    serviceType: string;

    @Prop()
    serviceDesc: string;

    @Prop()
    productType: string;

    @Prop()
    productDesc: string;

    @Prop()
    productFamily: string;

    @Prop()
    references: string[];

    @Prop()
    observation: string;

    @Prop()
    codeState: string;

    @Prop()
    state: string;

    @Prop()
    referenceOrder: string;

    @Prop()
    promiseDate: string;

    @Prop()
    isDangerousShipping: boolean;

    @Prop()
    weight: number;

    @Prop()
    volume: number;

    @Prop()
    declaredValue: number;

    @Prop()
    seller: Seller;

    @Prop()
    buyer: Buyer;

    @Prop()
    cod: Cod;

    @Prop()
    dd: Dd;

    @Prop()
    insurance: Insurance;

    @Prop()
    shipping: Shipping;

    @Prop()
    package: Package[];
    
    @Prop()
    taxDocument: TaxDocument;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
export type OrderModel = Model<OrderDocument>;
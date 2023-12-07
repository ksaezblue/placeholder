import { Buyer } from "./buyer.entity";
import { Cod } from "./cod.entity";
import { Dd } from "./dd.entity";
import { Insurance } from "./insurance.entity";
import { Package } from "./package.entity";
import { Seller } from "./seller.entity";
import { Shipping } from "./shipping.entity";
import { TaxDocument } from "./taxDocument.entity";


export class Order {
    orderId: string;
    emissionDate: Date;
    quantityPackages: number;
    serviceType: string;
    serviceDesc: string;
    productType: string;
    productDesc: string;
    productFamily: string;
    references: string[];
    observation: string;
    codeState: string;
    state: string;
    referenceOrder: string;
    promiseDate: string;
    isDangerousShipping: boolean;
    weight: number;
    volume: number;
    declaredValue: number;

    seller: Seller;

    buyer: Buyer;

    cod: Cod[];

    dd: Dd[];

    insurance: Insurance;

    shipping: Shipping;

    package: Package[];

    taxDocument: TaxDocument;
}
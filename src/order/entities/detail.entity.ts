import { Address } from "./address.entity";

export interface Detail {
    quantity: number;
    product: string;
    net: number;
    tax: number;
    total: number;
}
import { Address } from "./address.entity";

export class Seller {
    account: string;
    name: string;
    email: string;
    phone: string;
    identifier: string;
    agency: string;
    address: Address;
    fullAddress: string;
}
import { Address } from "./address.entity";

export class Buyer {
    name: string;
    email: string;
    phone: string;
    identifier: string;
    agency: string;
    address: Address;
    fullAddress: string;
}
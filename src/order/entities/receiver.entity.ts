import { Address } from "./address.entity";

export interface Receiver {
    name: string;
    email: string;
    address: Address;
}
import { Detail } from "./detail.entity";
import { Receiver } from "./receiver.entity";

export class TaxDocument {
    documentId: number;
    type: string;
    typeDesc: string;
    path: string;
    receiver: Receiver;
    detail: Detail;
}
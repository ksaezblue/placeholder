import { Tracking } from "./tracking.entity";
import { Units } from "./units.entity";

export class Package {
    packageId: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    volume: number;
    factor: number;
    units: Units;
    codeState: string;
    state: string;
    referenceChildOrder: string;
    tracking: Tracking;
}
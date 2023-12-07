import { Geolocalization } from "./geolocalization.entity";

export interface Tracking {
    trackingId: number;
    trackingDate: string;
    eventCode: string;
    eventType: string;
    location: string;
    userName: string;
    observation: string;
    createdDate: Date;
    geolocalization: Geolocalization;
}
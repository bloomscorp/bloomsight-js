import {IMetaData} from "./metadata";

export interface IDataEvent {
    property: string;
    dataEventToken: string;
    userId: string;
    ipAddress?: string;
    countryCode?: string;
    browserName?: string;
    osName?: string;
    deviceType?: string;
    newUser?: boolean;
    returningUser?: boolean;
    newSession?: boolean;
    eventLogData: IMetaData
}

import {IMetaData} from "./metadata";

export interface IWindow extends Window {
    isDevelopmentMode: boolean;
    logBloomsightSimpleEvent: (eventToken: string) => void,
    logBloomsightDataEvent: (eventToken: string, metadata: IMetaData) => void
}
import {IMetaData} from "./metadata";
import {IConfig} from "./config";

export interface IWindow extends Window {
    isDevelopmentMode: boolean;
    propertyToken: string;
    bloomsightConfig: (key: string, value: string) => void;
    logBloomsightSimpleEvent: (eventToken: string) => void;
    logBloomsightDataEvent: (eventToken: string, metadata: IMetaData) => void;
}
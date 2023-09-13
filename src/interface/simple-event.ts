export interface ISimpleEvent {
    property: string;
    simpleEventToken: string;
    userId: string;
    ipAddress?: string;
    countryCode?: string;
    browserName?: string;
    osName?: string;
    deviceType?: string;
    newUser?: boolean;
    returningUser?: boolean;
    newSession?: boolean;
}
import {IConfig} from "../interface/config";
import {ISimpleEvent} from "../interface/simple-event";

export class SimpleEventTransmissionService {
    //
    // public trigger(
    //     simpleEventToken: string,
    //     newUser: boolean,
    //     userId: string,
    //     config: IConfig
    // ): void {
    //
    //     let simpleEventData: ISimpleEvent = {
    //         property: config.propertyToken,
    //         simpleEventToken: simpleEventToken,
    //         userId: userId,
    //         deviceType: ,
    //         osName: this._deviceInformationService.getDeviceInfo().os,
    //         browserName: this._deviceInformationService.getDeviceInfo().browser,
    //         ipAddress: sessionStorage.getItem('ip') || undefined,
    //         countryCode: sessionStorage.getItem('country') || undefined
    //
    //     };
    //
    //     let triggeredEventList: string[] = this._localStorageService.retrieveEventList();
    //     if (!triggeredEventList || !triggeredEventList.includes(simpleEventToken)) {
    //         if (newUser) {
    //             simpleEventData.newUser = true;
    //             simpleEventData.newSession = true;
    //         } else {
    //             simpleEventData.returningUser = true;
    //             simpleEventData.newSession = true;
    //         }
    //         triggeredEventList.push(simpleEventToken);
    //         this._localStorageService.storeEventList(triggeredEventList);
    //     }
    //
    //     if (config.developmentMode) {
    //         console.log('simpleEventData: ', simpleEventData);
    //     }
    //
    //     this._transmission.executePostPayload<SimpleEventData>(
    //         RequestMapperService.ADD_SIMPLE_EVENT,
    //         simpleEventData,
    //         RequestMapperService.headers,
    //         (): void => {
    //         },
    //         (response: RaintreeResponse): void => {
    //         },
    //         (response: RaintreeResponse): void => {
    //         },
    //         (): void => {
    //         },
    //         (): void => {
    //         }
    //     );
    // }

}
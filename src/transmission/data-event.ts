import {IDataEvent} from "../interface/data-event";
import {IConfig} from "../interface/config";
import {IMetaData} from "../interface/metadata";
import {PlatformService} from "../service/platform";
import {SessionService} from "../service/session";

export class DataEventTransmissionService {

    private _platform: PlatformService = new PlatformService();
    private _session: SessionService = new SessionService();

    // public trigger(
    //     dataEventToken: string,
    //     newUser: boolean,
    //     userId: string,
    //     config: IConfig,
    //     metaData: IMetaData
    // ): void {
    //
    //     let dataEventData: IDataEvent = {
    //         property: config.propertyToken,
    //         dataEventToken: dataEventToken,
    //         userId: userId,
    //         deviceType: this._platform.device,
    //         osName: this._platform.os,
    //         browserName: this._platform.browser,
    //         ipAddress: sessionStorage.getItem('ip') || undefined,
    //         countryCode: sessionStorage.getItem('country') || undefined,
    //         eventLogData: metaData
    //     };
    //
    //     let triggeredEventList: string[] = this._localStorageService.retrieveEventList();
    //     if (!triggeredEventList || !triggeredEventList.includes(dataEventToken)) {
    //         if (newUser) {
    //             dataEventData.newUser = true;
    //             dataEventData.newSession = true;
    //         } else {
    //             dataEventData.returningUser = true;
    //             dataEventData.newSession = true;
    //         }
    //         triggeredEventList.push(dataEventToken);
    //         this._localStorageService.storeEventList(triggeredEventList);
    //     }
    //
    //     if (config.developmentMode) {
    //         console.log('dataEventData: ', dataEventData);
    //     }
    //
    //     this._transmission.executePostPayload<DataEventData>(
    //         RequestMapperService.ADD_DATA_EVENT,
    //         dataEventData,
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
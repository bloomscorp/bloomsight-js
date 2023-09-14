import {TransmissionService} from "./transmission";
import {ISimpleEvent} from "../interface/simple-event";
import {RequestMapperService} from "../service/request-mapper";
import {ConstantService} from "../service/constant";
import {RaintreeResponse} from "./interface/raintree-response";
import {IWindow} from "../interface/window";
import {IDataEvent} from "../interface/data-event";
import {IMetaData} from "../interface/metadata";

declare const window: IWindow;

export class DataEventTransmissionService extends TransmissionService {

    public trigger(
        eventToken: string,
        eventLogData: IMetaData,
        userId: string,
        newUser: boolean,
        newSession: boolean,
        ipAddress: string,
        countryCode: string,
        osName: string,
        deviceType: string,
        browserName: string
    ): void {

        let dataEventPayload: IDataEvent = {
            property: window.propertyToken,
            dataEventToken: eventToken,
            eventLogData,
            userId,
            newUser,
            newSession,
            returningUser: !newUser,
            ipAddress,
            countryCode,
            osName,
            deviceType,
            browserName
        }

        if (window.isDevelopmentMode)
            console.log('Data event logged', dataEventPayload);

        this.executePostPayload<IDataEvent>(
            RequestMapperService.ADD_DATA_EVENT,
            dataEventPayload,
            ConstantService.REQUEST_HEADERS,
            (): void => {
            },
            (response: RaintreeResponse): void => {
            },
            (response: RaintreeResponse): void => {
            },
            (): void => {
            },
            (): void => {
            }
        );
    }

}
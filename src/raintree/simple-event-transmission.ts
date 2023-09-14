import {TransmissionService} from "./transmission";
import {IWindow} from "../interface/window";
import {ISimpleEvent} from "../interface/simple-event";
import {RequestMapperService} from "../service/request-mapper";
import {ConstantService} from "../service/constant";
import {RaintreeResponse} from "./interface/raintree-response";

declare const window: IWindow;

export class SimpleEventTransmissionService extends TransmissionService {

    public trigger(
        eventToken: string,
        userId: string,
        newUser: boolean,
        newSession: boolean,
        ipAddress: string,
        countryCode: string,
        osName: string,
        deviceType: string,
        browserName: string
    ): void {

        let simpleEventPayload: ISimpleEvent = {
            property: window.propertyToken,
            simpleEventToken: eventToken,
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
            console.log('Simple event logged', simpleEventPayload);

        this.executePostPayload<ISimpleEvent>(
            RequestMapperService.ADD_SIMPLE_EVENT,
            simpleEventPayload,
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
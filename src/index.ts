import {SessionService} from "./service/session";
import {UserService} from "./service/user";
import {PlatformService} from "./service/platform";
import {DataEventTransmissionService} from "./transmission/data-event";
import {SimpleEventTransmissionService} from "./transmission/simple-event";
import {IMetaData} from "./interface/metadata";
import {IWindow} from "./interface/window";

declare const window: IWindow;

const _platform: PlatformService = new PlatformService();
const _session: SessionService = new SessionService();
const _user: UserService = new UserService();

const _simpleEventService: SimpleEventTransmissionService = new SimpleEventTransmissionService();
const _dataEventService: DataEventTransmissionService = new DataEventTransmissionService();

_platform.initPlatform();
_session.initSession();
_user.initUser();

window.logBloomsightSimpleEvent = (eventToken: string): void => {
    console.log('Simple Event Logged', eventToken);
    // this._simpleEventService.trigger(
    //     eventToken,
    //     this._user.isNewUser,
    //     this._user.retrieveUser(),
    //     {propertyToken: 'wewe', developmentMode: false}
    // );
}

window.logBloomsightDataEvent = (eventToken: string, metadata: IMetaData): void => {
    console.log('Data Event Logged', eventToken, metadata);
    // this._dataEventService.trigger(
    //     eventToken,
    //     this._user.isNewUser,
    //     this._user.retrieveUser(),
    //     {propertyToken: 'wewe', developmentMode: false},
    //     metadata
    // );
}


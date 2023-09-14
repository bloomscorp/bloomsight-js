import {SessionService} from "./service/session";
import {UserService} from "./service/user";
import {PlatformService} from "./service/platform";
import {DataEventTransmissionService} from "./raintree/data-event-transmission";
import {SimpleEventTransmissionService} from "./raintree/simple-event-transmission";
import {IMetaData} from "./interface/metadata";
import {IWindow} from "./interface/window";
import {ConstantService} from "./service/constant";

declare const window: IWindow;
let previousEventLogTime: number = Date.now();

const _platform: PlatformService = new PlatformService();
const _session: SessionService = new SessionService();
const _user: UserService = new UserService();

const _simpleEventService: SimpleEventTransmissionService = new SimpleEventTransmissionService();
const _dataEventService: DataEventTransmissionService = new DataEventTransmissionService();

_platform.init();
_session.init();
_user.init();

window.bloomsightConfig = (key: string, value: string): void => {

    if (key == ConstantService.PROPERTY_TOKEN_CONFIG) {
        window.propertyToken = value;

        if (window.isDevelopmentMode)
            console.log(`Property ID: ${window.propertyToken}`);
    }
}

window.addEventListener('click', throttle);
window.addEventListener('scroll', throttle);
window.addEventListener('wheel', throttle);
window.addEventListener('mousemove', throttle);
window.addEventListener('keydown', throttle);

function throttle(): void {

    if (((previousEventLogTime + 1000 * 60) - Date.now()) < 0) {
        _session.extendSession();
        previousEventLogTime = Date.now();
    }
}

window.logBloomsightSimpleEvent = (eventToken: string): void => {
    
    _simpleEventService
        .trigger(
            eventToken,
            _user.retrieveUser(),
            _user.isNewUser,
            _session.isNewSession,
            _session.retrieveIP(),
            _session.retrieveCountryCode(),
            _platform.os,
            _platform.device,
            _platform.browser
        );
}

window.logBloomsightDataEvent = (eventToken: string, metadata: IMetaData): void => {

    _dataEventService
        .trigger(
            eventToken,
            metadata,
            _user.retrieveUser(),
            _user.isNewUser,
            _session.isNewSession,
            _session.retrieveIP(),
            _session.retrieveCountryCode(),
            _platform.os,
            _platform.device,
            _platform.browser
        );
}


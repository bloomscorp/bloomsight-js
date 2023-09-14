import {SessionStorageService} from "./session-storage";
import {IIPData} from "../interface/ip-data";
import {LocalStorageService} from "./local-storage";
import {clearInterval} from "timers";
import {IWindow} from "../interface/window";
import {UtilityService} from "./utility";

declare const window: IWindow;

export class SessionService {

    private static readonly _sessionDurationInMinutes: number = 30;

    private _ipKey: string = 'h#6MNsN!4*z@E4';
    private _countryKey: string = 'Ytb^8HRfD&k3Lx';
    private _sessionExpiryTimeKey: string = 'WkDw3aZ#HD6^Ar';
    private _sessionExpiryTimeInMilliseconds: number = 0;
    private _sessionCheckInterval: number = 0;
    public isNewSession: boolean = true;

    private _localStore: LocalStorageService = new LocalStorageService();
    private _sessionStore: SessionStorageService = new SessionStorageService();

    public init(): void {

        this.setIPAndCountry();
        this.startSession();

        if (window.isDevelopmentMode) console.log(`New session started`);
    }

    private setIPAndCountry(): void {

        fetch('https://jsonip.com', {mode: 'cors'})
            .then((resp: Response) => resp.json())
            .then((ipData: IIPData): void => {

                this.storeIP(ipData.ip);
                this.storeCountryCode(ipData.country);

                if (window.isDevelopmentMode) {
                    console.log(`IP detected: ${this._sessionStore.retrieve(this._ipKey)}`);
                    console.log(`Country detected: ${this._sessionStore.retrieve(this._countryKey)}`);
                }
            })
            .catch((error): void => {
                if (window.isDevelopmentMode)
                    console.error('Unable to get IP', error);
            })
        ;
    }

    private checkSessionActivity = (): void => {

        const currenTimeInMilliseconds: number = Date.now();

        if (window.isDevelopmentMode)
            console.log(`session will be active for:  ${
                UtilityService.convertSecondsToMinuteAndSeconds(
                    Math.floor((this._sessionExpiryTimeInMilliseconds - currenTimeInMilliseconds) / 1000)
                )
            }`);

        if (currenTimeInMilliseconds > this._sessionExpiryTimeInMilliseconds) {
            this.resetSession();
        }
    }

    private startSession(): void {

        if (this._sessionCheckInterval != 0)
            window.clearInterval(this._sessionCheckInterval);

        this._sessionExpiryTimeInMilliseconds = Date.now() + SessionService._sessionDurationInMinutes * 60 * 1000;
        this._localStore.store(
            this._sessionExpiryTimeKey,
            this._sessionExpiryTimeInMilliseconds.toString()
        );

        this._sessionCheckInterval = window.setInterval(this.checkSessionActivity, 60 * 1000);
    }

    public extendSession(): void {

        if (window.isDevelopmentMode) console.log(`Existing session extended`);

        this.isNewSession = false;
        this.startSession();
    }

    private resetSession(): void {

        if (window.isDevelopmentMode) console.log(`New session started`);

        this.isNewSession = true;
        this.startSession();
    }

    private storeIP(ip: string): void {
        this._sessionStore.store(this._ipKey, ip);
    }

    public retrieveIP(): string {
        return this._sessionStore.retrieve(this._ipKey);
    }

    private storeCountryCode(code: string): void {
        this._sessionStore.store(this._countryKey, code);
    }

    public retrieveCountryCode(): string {
        return this._sessionStore.retrieve(this._countryKey);
    }

    public retrieveSessionExpiryTime(): number {

        if (this._sessionExpiryTimeInMilliseconds != 0)
            return this._sessionExpiryTimeInMilliseconds;

        this._sessionExpiryTimeInMilliseconds = +this._localStore.retrieve(this._sessionExpiryTimeKey);

        return this._sessionExpiryTimeInMilliseconds;
    }


}
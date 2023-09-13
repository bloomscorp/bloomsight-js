import {SessionStorageService} from "./session-storage";
import {IIPData} from "../interface/ip-data";
import {LocalStorageService} from "./local-storage";
import {clearInterval} from "timers";
import {IWindow} from "../interface/window";

declare const window: IWindow;

export class SessionService {

    private static readonly _sessionDurationInMinutes: number = 30;

    private _ipKey: string = 'h#6MNsN!4*z@E4';
    private _countryKey: string = 'Ytb^8HRfD&k3Lx';
    private _sessionExpiryTimeKey: string = 'WkDw3aZ#HD6^Ar';
    private _sessionExpiryTimeInMilliseconds: number = 0;
    private _sessionCheckInterval: number = 0;
    private _isNewSession: boolean = true;

    private _localStore: LocalStorageService = new LocalStorageService();
    private _sessionStore: SessionStorageService = new SessionStorageService();

    public initSession(): void {
        this.setIPAndCountry();
        this.startSession();
    }

    private setIPAndCountry(): void {

        fetch('https://jsonip.com', {mode: 'cors'})
            .then((resp: Response) => resp.json())
            .then((ipData: IIPData): void => {

                this._sessionStore.store(this._ipKey, ipData.ip);
                this._sessionStore.store(this._countryKey, ipData.country)

                if (window.isDevelopmentMode) {
                    console.log(`IP detected: ${this._sessionStore.retrieve(this._ipKey)}`);
                    console.log(`Country detected: ${this._sessionStore.retrieve(this._countryKey)}`);
                }
            })
            .catch((error) => {
                console.error('unable to get ip', error);
            })
        ;
    }

    private checkSessionActivity(): void {

        const currenTimeInMilliseconds: number = Date.now();

        if (currenTimeInMilliseconds > this._sessionExpiryTimeInMilliseconds) {
            this.startSession();
        }

        this.startSession();
    }

    private startSession(): void {

        if (this._sessionCheckInterval != null)
            clearInterval(this._sessionCheckInterval);

        this._sessionExpiryTimeInMilliseconds = Date.now() + SessionService._sessionDurationInMinutes * 60 * 1000;
        this._localStore.store(
            this._sessionExpiryTimeKey,
            this._sessionExpiryTimeInMilliseconds.toString()
        );

        this._sessionCheckInterval = window.setInterval(this.checkSessionActivity, 60 * 1000);
    }

    private extendSession(): void {
        this._isNewSession = false;
        this.startSession();
    }

    private resetSession(): void {
        this._isNewSession = true;
        this.startSession();
    }
}
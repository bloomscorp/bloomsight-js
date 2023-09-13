import {IWindow} from "../interface/window";

declare const window: IWindow;

export class PlatformService {

    public browser: string = '';
    public os: string = '';
    public device: string = '';
    private readonly _userAgent: string = '';

    constructor() {
        this._userAgent = window.navigator.userAgent;
    }

    public initPlatform(): void {

        this.detectBrowser();
        this.detectOS();
        this.detectDevice();

        if (window.isDevelopmentMode) {
            console.log(`Browser detected: ${this.browser}`);
            console.log(`OS detected:  ${this.os}`);
            console.log(`Device detected:  ${this.device}`);
        }
    }

    private detectBrowser(): void {

        if (this._userAgent.indexOf("Chrome") !== -1) {
            this.browser = "Google Chrome";
        } else if (this._userAgent.indexOf("Firefox") !== -1) {
            this.browser = "Mozilla Firefox";
        } else if (this._userAgent.indexOf("Safari") !== -1) {
            this.browser = "Apple Safari";
        } else if (this._userAgent.indexOf("Edge") !== -1) {
            this.browser = "Microsoft Edge (Chromium-based)";
        } else if (this._userAgent.indexOf("MSIE") !== -1 || this._userAgent.indexOf("Trident") !== -1) {
            this.browser = "Internet Explorer";
        } else {
            this.browser = "Unknown";
        }
    }

    private detectOS(): void {

        if (this._userAgent.indexOf("Windows") !== -1) {
            this.os = "Windows";
        } else if (this._userAgent.indexOf("Mac OS") !== -1) {
            this.os = "Mac OS";
        } else if (this._userAgent.indexOf("Linux") !== -1) {
            this.os = "Linux";
        } else if (this._userAgent.indexOf("Android") !== -1) {
            this.os = "Android";
        } else if (this._userAgent.indexOf("iOS") !== -1) {
            this.os = "iOS";
        } else {
            this.os = "Unknown";
        }
    }

    private detectDevice(): void {

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(this._userAgent)) {
            this.device = "Tablet";
        } else if (
            /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|webOS)/i.test(this._userAgent)
        ) {
            this.device = "Mobile";
        } else {
            this.device = "Desktop";
        }
    }

}
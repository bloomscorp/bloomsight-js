import {IWindow} from "../interface/window";

declare const window: IWindow;

export class PlatformService {

    private browser: string | null = null;
    private os: string | null = null;
    private userAgent: string = '';

    constructor() {
        this.userAgent = window.navigator.userAgent;
    }

    public initPlatform(): void {
        this.detectBrowser();
        this.detectOS();

        if (window.isDevelopmentMode) {
            console.log(`Browser detected: ${this.browser}`);
            console.log(`OS detected:  ${this.os}`);
        }
    }

    private detectBrowser(): void {

        if (this.userAgent.indexOf("Chrome") !== -1) {
            this.browser = "Google Chrome";
        } else if (this.userAgent.indexOf("Firefox") !== -1) {
            this.browser = "Mozilla Firefox";
        } else if (this.userAgent.indexOf("Safari") !== -1) {
            this.browser = "Apple Safari";
        } else if (this.userAgent.indexOf("Edge") !== -1) {
            this.browser = "Microsoft Edge (Chromium-based)";
        } else if (this.userAgent.indexOf("MSIE") !== -1 || this.userAgent.indexOf("Trident") !== -1) {
            this.browser = "Internet Explorer";
        } else {
            this.browser = "Unknown";
        }
    }

    private detectOS(): void {

        if (this.userAgent.indexOf("Windows") !== -1) {
            this.os = "Windows";
        } else if (this.userAgent.indexOf("Mac OS") !== -1) {
            this.os = "Mac OS";
        } else if (this.userAgent.indexOf("Linux") !== -1) {
            this.os = "Linux";
        } else if (this.userAgent.indexOf("Android") !== -1) {
            this.os = "Android";
        } else if (this.userAgent.indexOf("iOS") !== -1) {
            this.os = "iOS";
        } else {
            this.os = "Unknown";
        }
    }

}
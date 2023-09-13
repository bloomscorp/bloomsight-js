export class LocalStorageService {

    private _sessionTimeKey: string = 'sessionEnd';
    private _userKey: string = 'userId';
    private _eventListKey: string = 'eventList';

    constructor() {
    }

    public store(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public retrieve(key: string): string {
        const value: string | null = localStorage.getItem(key);
        return (value === null) ? '' : value;
    }

    public storeEventList(eventList: string[]): void {
        this.store(this._eventListKey, JSON.stringify(eventList));
    }

    public retrieveEventList(): string[] {
        return JSON.parse(this.retrieve(this._eventListKey));
    }
}
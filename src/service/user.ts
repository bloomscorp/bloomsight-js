import {LocalStorageService} from "./local-storage";
import {isEmptyString} from "bmx-pastebox"
import {UtilityService} from "./utility";

export class UserService {

    private static readonly _userTenureInDays: number = 45;

    private _userId: string | null = null;
    private _userKey: string = "EUJLo$Wu$6iH#s";
    private _isNewUser: boolean = false;

    private _localStore: LocalStorageService = new LocalStorageService();

    public initUser(): void {

        if (!this.isValidUserExists())
            this.generateNewUser();

    }

    private isValidUserExists(): boolean {

        this._userId = this.retrieveUser();

        return !isEmptyString(this._userId);
    }


    private generateNewUser(): void {

        this._userId = UtilityService.getUniqueId();
        this._isNewUser = true;

        this.storeUser(this._userId);
    }

    private storeUser(userId: string): void {
        this._localStore.store(this._userKey, userId);
    }

    public retrieveUser(): string {

        if (this._userId != null)
            return this._userId;

        this._userId = this._localStore.retrieve(this._userKey);

        return this._userId;
    }
}
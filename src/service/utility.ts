export class UtilityService {

    public static getUniqueId(): string {
        return (Date.now() + Math.random()).toString(36);
    }
}
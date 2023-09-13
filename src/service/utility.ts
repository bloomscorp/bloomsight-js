export class UtilityService {

    public static getUniqueId(): string {
        return (Date.now() + Math.random()).toString(36);
    }

    public static convertSecondsToMinuteAndSeconds(seconds: number): string {

        if (seconds < 0) {
            return 'Invalid input';
        }

        const minutes: number = Math.floor(seconds / 60);
        const remainingSeconds: number = seconds % 60;

        return `${minutes} minute(s) and ${remainingSeconds} second(s)`;
    }
}
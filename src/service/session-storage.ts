export class SessionStorageService {

    public store(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    public retrieve(key: string): string {
        const value: string | null = sessionStorage.getItem(key);
        return (value === null) ? '' : value;
    }
}
export class ConfigurationService {

    // @ts-ignore
    private static readonly PRODUCTION: boolean = false;

    private static readonly SECURE_CONNECT: boolean = ConfigurationService.PRODUCTION;
    private static readonly PROTOCOL: string = ConfigurationService.SECURE_CONNECT ? 'https://' : 'http://';
    private static readonly DOMAIN_PRODUCTION: string = 'api.bloomsight.io';
    private static readonly DOMAIN_LOCALHOST: string = 'localhost';
    private static readonly API_PREFIX: string = '/api/v1';
    private static readonly DOMAIN: string = ConfigurationService.PRODUCTION
        ? ConfigurationService.DOMAIN_PRODUCTION
        : ConfigurationService.DOMAIN_LOCALHOST;
    private static readonly SERVER_PORT: string = ConfigurationService.PRODUCTION ? '' : ':3000';
    public static readonly API_ENDPOINT: string = ConfigurationService.PROTOCOL +
        ConfigurationService.DOMAIN +
        ConfigurationService.SERVER_PORT +
        ConfigurationService.API_PREFIX;

    private constructor() {
    }
}
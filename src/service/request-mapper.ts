import {ConfigurationService} from "./configuration";

export class RequestMapperService {

    public static readonly ADD_SIMPLE_EVENT: string = ConfigurationService.API_ENDPOINT + '/simple-event-data/add';
    public static readonly ADD_DATA_EVENT: string = ConfigurationService.API_ENDPOINT + '/data-event-data/add';

    private constructor() {
    }
}
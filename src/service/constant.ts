export class ConstantService {

    public static readonly PROPERTY_TOKEN_CONFIG: string = "PROPERTY_ID";

    public static readonly REQUEST_HEADERS: Headers = new Headers(
        {"Content-Type": "application/json"}
    );

    private constructor() {
    }
}
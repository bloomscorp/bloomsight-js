import {RaintreeResponse} from "./interface/raintree-response";

export class TransmissionService {

    public executePostPayload<T>(
        url: string,
        payload: T,
        headers: Headers | undefined,
        onPreExecute: () => void,
        onPostExecute: (response: RaintreeResponse) => void,
        onSuccess: (response: RaintreeResponse) => void,
        onFailure: (error: string) => void,
        onComplete: () => void,
    ): void {

        onPreExecute();

        fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        }).then(
            (response: Response) => response.json()
        ).then(
            (response: RaintreeResponse): void => {

                onPostExecute(response);

                if (response.success)
                    onSuccess(response);
            }
        ).catch(
            (error): void => {
                console.log('catch', error);
                onFailure(error.toString())
            }
        ).finally(
            (): void => onComplete()
        )
    }
}
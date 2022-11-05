import { AxiosError, AxiosResponse } from 'axios';
import { requestApi } from '../services/api/request';

interface Body {
    [item: string]: unknown;
}

interface Request {
    url: string;
    title: string;
    queryParams?: object | URLSearchParams;
    body?: Body;
}

type Error = {
    msg: string;
    code: string;
};

type Response<T> = {
    status: number;
    data?: T;
    error: Error;
};

type RequestConfig = {
    params: object | URLSearchParams | undefined;
    headers: object;
};

const useRequest = () => {
    const config: RequestConfig = {
        params: {},
        headers: {},
    };

    function processSuccessResponse<T>(
        response: Response<T>,
        success: AxiosResponse
    ): void {
        response.status = success.status;
        response.data = success.data;
    }

    function processErrorResponse<T>(
        response: Response<T>,
        error: AxiosError
    ): void {
        response.status = error.status ?? error.response?.status ?? 500;
        response.error = {
            msg: error.message,
            code: error.code ?? '',
        };
    }

    async function deleteRequest(request: Request) {
        return;
    }

    async function getRequest<T>(request: Request): Promise<Response<T>> {
        config.params = request.queryParams;

        const response: Response<T> = {
            status: 0,
            data: {} as T,
            error: {} as Error,
        };

        requestApi
            .get(request.url, config)
            .then((success: AxiosResponse) =>
                processSuccessResponse<T>(response, success)
            )
            .catch((error: AxiosError) =>
                processErrorResponse(response, error)
            );

        return response;
    }

    async function patchRequest<T>(request: Request): Promise<Response<T>> {
        const config = {
            params: request.queryParams,
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        };

        const response: Response<T> = {
            status: 0,
            data: {} as T,
            error: {} as Error,
        };

        requestApi
            .get(request.url, config)
            .then(({ data }: AxiosResponse) => (response.data = data))
            .catch(
                (error: AxiosError) =>
                    (response.error = {
                        msg: error.message,
                        code: error.code ?? '',
                    })
            );

        return response;
    }

    async function postRequest(request: Request) {
        const config = {
            params: request.queryParams,
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        };
    }

    async function putRequest(request: Request) {
        const config = {
            params: request.queryParams,
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        };
    }

    return {
        getRequest,
        postRequest,
        putRequest,
        patchRequest,
        deleteRequest,
    };
};

export default useRequest;

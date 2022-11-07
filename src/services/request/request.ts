import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

type Body = {
    [item: string]: unknown;
};

type Request = {
    url: string;
    queryParams?: object | URLSearchParams;
    body?: Body;
};

type HttpMethods<T> = {
    get: Promise<Response<T>>;
    delete: Promise<Response<T>>;
    post: Promise<Response<T>>;
    put: Promise<Response<T>>;
    patch: Promise<Response<T>>;
};

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

const requestConfig: RequestConfig = {
    params: {},
    headers: {},
};

function processSuccessResponse<T>(
    response: Response<T>,
    axiosResponse: AxiosResponse
): void {
    response.status = axiosResponse.status;
    response.data = axiosResponse.data;
}

function processErrorResponse<T>(
    response: Response<T>,
    axiosError: AxiosError
): void {
    response.status = axiosError.status ?? axiosError.response?.status ?? 500;
    response.error = {
        msg: axiosError.message,
        code: axiosError.code ?? '',
    };
}

async function getRequest<T>(
    url: string,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    await requestApi
        .get(url, requestConfig)
        .then((success: AxiosResponse) =>
            processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => processErrorResponse(response, error));

    return response;
}

async function deleteRequest<T>(
    url: string,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    await requestApi
        .delete(url, requestConfig)
        .then((success: AxiosResponse) =>
            processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => processErrorResponse(response, error));

    return response;
}

async function postRequest<T>(
    url: string,
    body: Body,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    await requestApi
        .post(url, body, requestConfig)
        .then((success: AxiosResponse) =>
            processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => processErrorResponse(response, error));

    return response;
}

async function putRequest<T>(
    url: string,
    body: Body,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    await requestApi
        .put(url, body, requestConfig)
        .then((success: AxiosResponse) =>
            processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => processErrorResponse(response, error));

    return response;
}

async function patchRequest<T>(
    url: string,
    body: Body,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    await requestApi
        .patch(url, body, requestConfig)
        .then((success: AxiosResponse) =>
            processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => processErrorResponse(response, error));

    return response;
}

export const requestApi: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
});

export async function request<T>(
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    request: Request
): Promise<Response<T>> {
    requestConfig.params = request.queryParams;

    const emptyResponse: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    switch (method) {
        case 'delete':
            return await deleteRequest<T>(request.url, requestConfig);
        case 'get':
            return await getRequest<T>(request.url, requestConfig);
        case 'patch':
            return await patchRequest<T>(
                request.url,
                request.body ?? {},
                requestConfig
            );
        case 'post':
            return await postRequest<T>(
                request.url,
                request.body ?? {},
                requestConfig
            );
        case 'put':
            return await putRequest<T>(
                request.url,
                request.body ?? {},
                requestConfig
            );
        default:
            console.log('method does not exists');
    }
    return emptyResponse;

    // const methods: HttpMethods<T> = {
    //     get: getRequest<T>(request.url, requestConfig),
    //     delete: deleteRequest<T>(request.url, requestConfig),
    //     post: postRequest<T>(request.url, request.body ?? {}, requestConfig),
    //     put: putRequest<T>(request.url, request.body ?? {}, requestConfig),
    //     patch: patchRequest<T>(request.url, request.body ?? {}, requestConfig),
    // };
    // const response = methods[method];
    // return response;
}

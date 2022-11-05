import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

interface Body {
    [item: string]: unknown;
}

interface Request {
    url: string;
    queryParams?: object | URLSearchParams;
    body?: Body;
}

interface HttpMethods<T> {
    get: Promise<Response<T>>;
    delete: Promise<Response<T>>;
    post: Promise<Response<T>>;
    put: Promise<Response<T>>;
    patch: Promise<Response<T>>;
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

const _requestConfig: RequestConfig = {
    params: {},
    headers: {},
};

function _processSuccessResponse<T>(
    response: Response<T>,
    axiosResponse: AxiosResponse
): void {
    response.status = axiosResponse.status;
    response.data = axiosResponse.data;
}

function _processErrorResponse<T>(
    response: Response<T>,
    axiosError: AxiosError
): void {
    response.status = axiosError.status ?? axiosError.response?.status ?? 500;
    response.error = {
        msg: axiosError.message,
        code: axiosError.code ?? '',
    };
}

async function _getRequest<T>(
    url: string,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    requestApi
        .get(url, requestConfig)
        .then((success: AxiosResponse) =>
            _processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => _processErrorResponse(response, error));

    console.log(response);
    return response;
}

async function _deleteRequest<T>(
    url: string,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    requestApi
        .delete(url, requestConfig)
        .then((success: AxiosResponse) =>
            _processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => _processErrorResponse(response, error));

    return response;
}

async function _postRequest<T>(
    url: string,
    body: Body,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    requestApi
        .post(url, body, requestConfig)
        .then((success: AxiosResponse) =>
            _processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => _processErrorResponse(response, error));

    return response;
}

async function _putRequest<T>(
    url: string,
    body: Body,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    requestApi
        .put(url, body, requestConfig)
        .then((success: AxiosResponse) =>
            _processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => _processErrorResponse(response, error));

    return response;
}

async function _patchRequest<T>(
    url: string,
    body: Body,
    requestConfig: RequestConfig
): Promise<Response<T>> {
    const response: Response<T> = {
        status: 0,
        data: {} as T,
        error: {} as Error,
    };

    requestApi
        .patch(url, body, requestConfig)
        .then((success: AxiosResponse) =>
            _processSuccessResponse<T>(response, success)
        )
        .catch((error: AxiosError) => _processErrorResponse(response, error));

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
    _requestConfig.params = request.queryParams;
    const methods: HttpMethods<T> = {
        get: _getRequest<T>(request.url, _requestConfig),
        delete: _deleteRequest<T>(request.url, _requestConfig),
        post: _postRequest<T>(request.url, request.body ?? {}, _requestConfig),
        put: _putRequest<T>(request.url, request.body ?? {}, _requestConfig),
        patch: _patchRequest<T>(
            request.url,
            request.body ?? {},
            _requestConfig
        ),
    };
    return methods[method];
}

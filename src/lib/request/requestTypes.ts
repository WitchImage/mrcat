export type Body = {
    [item: string]: unknown;
};

export type RequestConfig = {
    params: object | URLSearchParams | undefined;
    headers: object;
};

export type Request = {
    url: string;
    queryParams?: object | URLSearchParams;
    body?: any;
};

export type HttpMethods<T> = {
    get: Promise<Response<T>>;
    delete: Promise<Response<T>>;
    post: Promise<Response<T>>;
    put: Promise<Response<T>>;
    patch: Promise<Response<T>>;
};

export type Error = {
    msg: string;
    code: string;
};

export type Response<T> = {
    status: number;
    data?: T;
    error: Error;
};

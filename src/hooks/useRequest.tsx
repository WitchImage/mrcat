import { AxiosResponse } from 'axios';
import { requestApi } from '../api/request';

interface Body {
    [item: string]: any;
}

interface Request {
    url: string;
    title: string;
    queryParams?: object | URLSearchParams;
    body?: Body;
}

type Error = {
    status: number;
    msg: string;
};

type Response<T> = {
    status: number;
    data?: T;
    error: Error;
};

const useRequest = () => {
    async function getRequest<T>(request: Request): Promise<Response<T>> {
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
            .catch((error: Error) => (response.error = error));

        return response;
    }

    async function postRequest(request: Request) {
        return;
    }

    async function putRequest(request: Request) {
        return;
    }

    async function patchRequest(request: Request) {
        return;
    }

    async function deleteRequest(request: Request) {
        return;
    }
};

export default useRequest;

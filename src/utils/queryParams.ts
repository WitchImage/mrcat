interface ParamsObj {
    [param: string]: string;
}

const queryParams = (paramsObj: ParamsObj) => {
    return new URLSearchParams(paramsObj).toString();
};

export default queryParams;

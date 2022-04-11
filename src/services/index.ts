import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class RequestConfig {
    protected defaultApi: AxiosInstance;
    constructor() {
        this.defaultApi = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL,
        });
        this.attachInterceptors();
    }
    private attachInterceptors() {
        this.defaultApi.interceptors.request.use(async (req: AxiosRequestConfig) => {
            return req;
        });
    }
}
export default RequestConfig;

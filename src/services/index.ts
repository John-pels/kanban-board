import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class RequestConfig {
    protected api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL,
        });
        this.attachInterceptors();
    }
    private attachInterceptors() {
        this.api.interceptors.request.use(async (req: AxiosRequestConfig) => {
            return req;
        });
    }
}
export default RequestConfig;

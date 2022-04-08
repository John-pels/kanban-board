import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "";

class RequestConfig {
  protected api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
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

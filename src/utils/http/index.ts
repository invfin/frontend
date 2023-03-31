import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CustomParamsSerializer
} from "axios";
import {
  PureHttpError,
  RequestMethods,
  PureHttpResponse,
  PureHttpRequestConfig
} from "./types.d";
import { stringify } from "qs";
import NProgress from "../progress";
import { formatToken } from "@/utils/auth";
// import { useUserStoreHook } from "@/store/modules/user";

//www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
    // Add custom header
  },
  paramsSerializer: {
    serialize: stringify as unknown as CustomParamsSerializer
  }
};

class PureHttp {
  private _config: PureHttpRequestConfig;
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  private static requests = [];

  private static isRefreshing = false;

  private static initConfig: PureHttpRequestConfig = {};

  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  private static retryOriginalRequest(config: PureHttpRequestConfig) {
    return new Promise(resolve => {
      PureHttp.requests.push((token: string) => {
        config.headers["Authorization"] = formatToken(token);
        resolve(config);
      });
    });
  }

  // private setConfigHeaders(config: PureHttpRequestConfig, tokensData): void {
  //   const token = tokensData.tokens["refresh"].token;
  //   config.headers["Authorization"] = formatToken(tokensData);
  // }

  private handlePureHttpNotRefreshing(config: PureHttpRequestConfig) {
    this._config = config;
    // if (!PureHttp.isRefreshing) {
    //   PureHttp.isRefreshing = true;
    //   useUserStoreHook()
    //     .handRefreshToken()
    //     .then(res => {
    //       this.setConfigHeaders(config, res);
    //       PureHttp.requests = [];
    //     })
    //     .finally(() => {
    //       PureHttp.isRefreshing = false;
    //     });
    // }
    PureHttp.requests = [];
    // this.setConfigHeaders(config, {});
    PureHttp.isRefreshing = false;
  }

  private httpInterceptorsRequest(): void {
    PureHttp.axiosInstance.interceptors.request.use(
      async (config: PureHttpRequestConfig) => {
        NProgress.start();
        if (typeof config.beforeRequestCallback === "function") {
          config.beforeRequestCallback(config);
          return config;
        }
        if (PureHttp.initConfig.beforeRequestCallback) {
          PureHttp.initConfig.beforeRequestCallback(config);
          return config;
        }
        const whiteList = ["/refreshToken", "/login"];
        return whiteList.some(v => config.url.indexOf(v) > -1)
          ? config
          : new Promise(resolve => {
              // const data = Authorization.getAuthToken();
              // This part is the one blocking if there isn't a token
              // if (data === undefined) {
              //   this.handlePureHttpNotRefreshing(config);
              //   resolve(PureHttp.retryOriginalRequest(config));
              // } else {
              //   this.setConfigHeaders(config, data);
              //   resolve(config);
              // }
              resolve(config);
            });
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  private httpInterceptorsResponse(): void {
    const instance = PureHttp.axiosInstance;
    instance.interceptors.response.use(
      (response: PureHttpResponse) => {
        const $config = response.config;
        NProgress.done();
        if (typeof $config.beforeResponseCallback === "function") {
          $config.beforeResponseCallback(response);
          return response.data;
        }
        if (PureHttp.initConfig.beforeResponseCallback) {
          PureHttp.initConfig.beforeResponseCallback(response);
          return response.data;
        }
        return response.data;
      },
      (error: PureHttpError) => {
        const $error = error;
        $error.isCancelRequest = Axios.isCancel($error);
        NProgress.done();
        return Promise.reject($error);
      }
    );
  }

  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    } as PureHttpRequestConfig;
    return new Promise((resolve, reject) => {
      PureHttp.axiosInstance
        .request(config)
        .then((response: undefined) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public post<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("post", url, params, config);
  }

  public get<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("get", url, params, config);
  }
}

export const http = new PureHttp();

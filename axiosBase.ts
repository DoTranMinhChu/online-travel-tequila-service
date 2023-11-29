import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = (
  baseURL: string,
  config: AxiosRequestConfig = {}
) => {
  config.baseURL = baseURL;
  return axios.create(config);
};

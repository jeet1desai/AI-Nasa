import axios, { AxiosError, AxiosResponse } from "axios";
import { API } from "../utils/constants/api";
import { HttpStatusCode } from "../utils/enums/http-status";

const httpClient = axios.create({
  baseURL: API.NASA_BASE_URL,
});

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    switch (error.response?.status) {
      case HttpStatusCode.Unauthorized:
        break;
      case HttpStatusCode.BadRequest:
        break;
      case HttpStatusCode.NotFound:
        break;
      case HttpStatusCode.InternalServerError:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default httpClient;

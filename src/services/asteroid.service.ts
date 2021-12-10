import { AxiosResponse } from "axios";
import { API } from "../utils/constants/api";
import {
  IAsteroidData,
  IRandomAsteroidDatResponse,
} from "../utils/interfaces/asteroid";
import httpClient from "./http.service";

const getAsteroidById = (
  id: string
): Promise<AxiosResponse<IAsteroidData>> =>
  httpClient.get(`/neo/${id}?api_key=${API.NASA_API_KEY}`);

const getRandomAsteroidId = (): Promise<
  AxiosResponse<IRandomAsteroidDatResponse>
> => httpClient.get(`/neo/browse?api_key=${API.NASA_API_KEY}`);

export default { getAsteroidById, getRandomAsteroidId };

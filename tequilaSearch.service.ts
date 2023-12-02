import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosBase";
import { TequilaServiceConfig } from "./tequila.type";
import { ISearchFlight } from "./tequilaSearch.interface";
import { SearchFlightsType } from "./tequilaSearch.type";

export class TequilaSearchService {
  #_apiKey: string;
  #_axiosInstance: AxiosInstance;
  #_baseURL: string;
  constructor(tequilaServiceConfig: TequilaServiceConfig) {
    this.#_apiKey = tequilaServiceConfig.apiKey;
    this.#_baseURL = tequilaServiceConfig.baseUrl;
    this.#_axiosInstance = axiosInstance(this.#_baseURL, {
      headers: { Apikey: this.#_apiKey },
    });
  }

  /**
   * Type of request used mainly for suggestions (based on incomplete names).
   * @param params
   * @returns {ISearchFlight}
   */
  async searchFlights(params: SearchFlightsType): Promise<ISearchFlight> {
    return (
      await this.#_axiosInstance.get<ISearchFlight>("search", {
        params,
      })
    )?.data;
  }
}

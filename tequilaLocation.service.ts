import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosBase";
import { TequilaServiceConfig } from "./tequila.type";
import { ITequilaLocationQuery } from "./tequilaLocation.interface";
import {
  SearchLocationByBoxType,
  GetLocationDumpType,
  SearchLocationByQueryType,
  SearchLocationByRadiusType,
  SearchLocationTopDestinationsType,
  SearchLocationByHashtag,
  SearchLocationByTopHashtags,
  SearchLocationBySEOUrl,
} from "./tequilaLocation.type";

export class TequilaLocationService {
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
   * @returns {ITequilaLocationQuery}
   */
  async searchByQuery(
    params: SearchLocationByQueryType
  ): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>("locations/query", {
        params,
      })
    )?.data;
  }

  /**
   * Used for searching for locations either by coordinates (lat, lon) or by an identifier - slug or id of the location (term).
   * @param params
   * @returns {ITequilaLocationQuery}
   */
  async searchByRadius(
    params: SearchLocationByRadiusType
  ): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>(
        "locations/radius",
        {
          params,
        }
      )
    )?.data;
  }

  /**
   * Used for searching for locations within the specified box.
   * @param params
   * @returns {ITequilaLocationQuery}
   */
  async searchByBox(
    params: SearchLocationByBoxType
  ): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>("locations/box", {
        params,
      })
    )?.data;
  }

  /**
   * Used for searching for locations by their id.
   * @param params
   * @returns {ITequilaLocationQuery}
   */
  async searchById(
    params: SearchLocationByBoxType
  ): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>("locations/id", {
        params,
      })
    )?.data;
  }

  /**
   * Used for getting a dump of locations data in the specified language.
   * When retrieving large amounts of locations (using type=dump), it is more efficient to use a paginated response.
   * This can be done using parameter search_after.
   * In addition, when retrieving paginated data it is advised to use "sort=id" so the returned results are consistent.
   *
   * @param params
   * @returns {ITequilaLocationQuery}
   */
  async getDump(params: GetLocationDumpType): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>("locations/dump", {
        params,
      })
    )?.data;
  }

  /**
   * Used for getting a list of destinations most searched / clicked on / booked from the starting point defined by term.
   *
   * @param params
   * @returns {ITequilaLocationQuery}
   */
  async searchTopDestinations(
    params: SearchLocationTopDestinationsType
  ): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>(
        "locations/topdestinations",
        {
          params,
        }
      )
    )?.data;
  }

  /**
   * Used for getting a list of hashtags used for destinations most searched / clicked on / booked from the starting point defined by term.
   * In other words: “What are the most popular activities at the places customers tend to search for / click / book when flying from term ?”
   *
   * @param params
   * @returns {ITequilaLocationQuery}
   */
  async searchTopHashTags(
    params: SearchLocationByTopHashtags
  ): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>(
        "locations/tophashtags",
        {
          params,
        }
      )
    )?.data;
  }

  /**
   * Search by slug
   *
   * @param params
   * @returns {ITequilaLocationQuery}
   */
  async searchBySEOUrl(
    params: SearchLocationBySEOUrl
  ): Promise<ITequilaLocationQuery> {
    return (
      await this.#_axiosInstance.get<ITequilaLocationQuery>("locations/slug", {
        params,
      })
    )?.data;
  }
}

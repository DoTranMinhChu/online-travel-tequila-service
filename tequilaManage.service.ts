import { AxiosInstance } from "axios";
import { TequilaServiceConfig } from "./tequila.type";
import { axiosInstance } from "./axiosBase";
import {
  IAuthToken,
  IBookingPassengers,
  IRefundBooking,
} from "./tequilaManage.interface";
import {
  AddingSinglePassengerPassportDetailsType,
  RefundBookingsType,
} from "./tequilaManage.type";

export class TequilaManageService {
  #_apiKey: string;
  #_axiosInstance: AxiosInstance;
  #_baseURL: string;
  #_authToken: string;
  constructor(tequilaServiceConfig: TequilaServiceConfig) {
    this.#_apiKey = tequilaServiceConfig.apiKey;
    this.#_baseURL = tequilaServiceConfig.baseUrl;
    this.#_authToken = tequilaServiceConfig.authToken;
    this.#_axiosInstance = axiosInstance(this.#_baseURL, {
      headers: { Apikey: this.#_apiKey, "KW-Auth-Token": this.#_authToken },
    });
  }

  /**
   * You receive an authorization_token (KW-Auth-Token).
   * The authorization_token is valid for 30 minutes.
   * If needed, the request can be resent after 30 minutes to get a new authorization_token.
   *
   * @returns IAuthToken
   */
  async createAuthToken(): Promise<IAuthToken> {
    return (
      await this.#_axiosInstance.post<IAuthToken>("manage/create_auth_token")
    )?.data;
  }

  /**
   *createRefunds
   * @returns Array<IRefundBooking>
   */
  async createRefunds(
    params: Array<RefundBookingsType>
  ): Promise<Array<IRefundBooking>> {
    return (
      await this.#_axiosInstance.post<Array<IRefundBooking>>(
        "manage/refunds",
        params
      )
    )?.data;
  }

  /**
   * Send the request. You will receive passenger IDs and other data for all passengers included in the booking.
   *
   * @returns Array<IRefundBooking>
   */
  async gettingPassenger(
    booking_id: string
  ): Promise<Array<IBookingPassengers>> {
    return (
      await this.#_axiosInstance.get<Array<IBookingPassengers>>(
        `manage/bookings/${booking_id}/passengers`
      )
    )?.data;
  }

  /**
   * Adding single passenger passport details
   *
   * @returns Array<IRefundBooking>
   */
  async addingSinglePassengerPassportDetails(
    booking_id: string,
    passportDetails: AddingSinglePassengerPassportDetailsType
  ): Promise<Array<IBookingPassengers>> {
    return (
      await this.#_axiosInstance.patch<Array<IBookingPassengers>>(
        `manage/bookings/${booking_id}/passengers`,
        passportDetails
      )
    )?.data;
  }
}

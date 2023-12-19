import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosBase";
import { TequilaServiceConfig } from "./tequila.type";
import { IBookingFlight } from "./tequilaBooking.interface";
import {
  CheckFlightsType,
  ConfirmPaymentFlightType,
  SaveBookingFlightsType,
} from "./tequilaBooking.type";

export class TequilaBookingService {
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
   * # 1.1 Workflow of calling `` /check_flights``
   * The `` /check_flights`` endpoint must be called repeatedly throughout the whole flow until moving to the next call.
   * The workflow is divided into two phases:
   *
   * ## 1st phase
   * Call this endpoint every 2 or 3 seconds until you receive the following values in the properties essential to continue with the booking flow:
   *
   *   "flights_checked": true
   *   "price_change": false
   *   "flights_invalid": false
   * During this call, our system runs the price and availability validation, and it is usually verified in under 10 seconds.
   * After this verification, the itinerary is ready to book.
   *
   * ## 2nd phase
   * Keep calling this endpoint every 15 seconds in the background until you get the customer details and proceed to the next call /save_booking.
   * Our system keeps checking any potential issues with bookability.
   *
   * # 1.2 Important notes
   * ## 1.2.1 Booking token age
   * Call this endpoint right after the initial search when the booking token is only seconds or minutes old.
   * The maximum time limit between the /search and `` /check_flights`` calls is ``30 minutes``.
   * The older the booking token gets, the more price changes can occur.
   * Should you call the `` /check_flights`` endpoint with a booking token older than ``30 minutes``,
   * you might receive a 400 error ``Expired booking token``.
   *
   * ## 1.2.2 Price changes
   * If price_change returns true, look for the new price in the response under total.
   * If you receive the value true, it does not change in the subsequent calls.
   * In such cases,  you can either notify your customers (via a pop-up or similar message) or consume the changes in the price.
   *
   * ## 1.2.3 Invalid flights
   * If the value of flights_invalid returns true, the itinerary is not available to book as it is either canceled by the airline or sold out.
   * You need to abandon the booking and start with a new search request.
   * (In such situation you do not need to wait for flights_checked to return true)
   * The flights_invalid property needs to return the value false in a standard API workflow to be able to continue with booking the itinerary.
   *
   * # 1.3 Recommended flow on the partner’s website
   * We recommend repeatedly calling the `` /check_flights`` endpoint based on the above requirements on your "Booking page"
   * while the clients fill in personal information, select ancillaries, and input payment details.
   *
   * @param params
   * @returns {IBookingFlight}
   */
  async checkFlights(params: CheckFlightsType): Promise<IBookingFlight> {
    return (
      await this.#_axiosInstance.get<IBookingFlight>("booking/check_flights", {
        params,
      })
    )?.data;
  }

  /**
   * 2.1 Workflow of calling ``/save_booking``
   *Call the ``/save_booking`` endpoint only once. This step triggers the creation of the booking order in our system. Subsequently, 
   it freezes the respective amount of funds from the payment method you are using (Kiwi.com credits from your deposit account or credit card). 
   The system is awaiting confirming the Kiwi.com credit transaction from your side.
   *
   * This POST request requires several parameters in the body specifying the order. These parameters are described below in section 2.3.
   *
   * Important note: Make sure that you validate the same properties as in the ``/check_flights`` response, as the price may change, 
   * or the itinerary may become unavailable even at this point. Make sure that you are validating the property total here. 
   * This is the final amount we will be charging you for the booking.
   *
   * Abandoned booking: In case you abandon the booking after this call and do not continue with ``/confirm_payment``, 
   * the blocked funds are released back to your payment method within 90 minutes.
   * 
   * 2.1.1 Zooz payments
   * For Zooz payments, you need to add the parameter payment_gateway to the request body with the value payu ("payment_gateway": "payu").
   * 
   * After this call, you need to move on to tokenizing the card data described in the user guide Corporate credit card payment.
   * 
   * 2.2 Recommended flow on the partner’s website
   * We recommend calling this endpoint right before your customer pays for the booking on your website, that means, 
   * after inputting the necessary payment details but before processing the payment by the finance entity.
   * Never charge the customer before validating the important ``/save_booking`` response properties mentioned above.
   * 
   * @param data 
   * @returns 
   */
  async saveBooking(data: SaveBookingFlightsType): Promise<IBookingFlight> {
    const { visitor_uniqid, ...body } = data;
    let params = {};
    if (visitor_uniqid)
      params = {
        visitor_uniqid,
      };
    return (
      await this.#_axiosInstance.post<IBookingFlight>(
        "booking/save_booking",
        body,
        {
          params,
        }
      )
    )?.data;
  }

  /**
   *
   * # 3.1 Confirm_payment
   * ## 3.1.1 Workflow of calling ``/confirm_payment``
   * Call the ``/confirm_payment`` endpoint only once, ideally within seconds after a successful ``/save_booking`` call.
   * In the POST request body, specify the booking_id and transaction_id retrieved from the ``/save_booking`` response.
   *
   * When you receive a ``status: 0`` in the response, the transaction is successful and the booking order is confirmed in our system.
   *
   * Important note: The maximum limit between these two calls is ``30 minutes``, and any later you may receive an error response
   * ```
   *  {
   *    "status": -1,
   *    "msg": "confirm payment timeout"
   *  }.
   * ```
   * The payment will not be successfully processed and the order will not be completed.
   *
   * ## 3.1.2 Recommended flow on the partner’s website
   * We recommend calling this endpoint right at the moment of a successful transaction between you and your customer.
   *
   *
   * ### payment status:
   *   `0: payment success, the BID is created.`
   *   `1: payment failed.`
   * @param data
   * @returns
   */
  async confirmPayment(data: ConfirmPaymentFlightType): Promise<{
    status: number;
  }> {
    return (
      await this.#_axiosInstance.post<{
        status: number;
      }>("booking/confirm_payment", data)
    )?.data;
  }
}

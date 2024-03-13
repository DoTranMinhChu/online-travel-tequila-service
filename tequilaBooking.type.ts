import { ECurrency, ETequilaLangueCode, ETequilaLocale } from "./tequila.enum";

export type CheckFlightsType = {
  /**
   * The token received in the Search API response. Booking tokens expire after 30 minutes.
   */
  booking_token: string;

  /**
   * The number of bags for the entire booking,
   * even if bags_price states that the first (or even second) checked baggage is free,
   * it is necessary to request it.
   */
  bnum: number;

  /**
   * The adults is a required parameter that represents the number of adult travelers.
   * There has to be at least one adult in the booking.
   */
  adults: number;

  /**
   * The children is a required parameter that represents the number of children travelers.
   */
  children: number;

  /**
   * The infants is a required parameter that represents the number of infant travelers.
   */
  infants: number;

  /**
   * The session_id binds the pricing to your particular itinerary and can help us track a specific order.
   * Find the session_id in the response of the first check_flights call and use it as a parameter in all subsequent check_flights calls.
   */
  session_id: string;

  /**
   * Conversion will be in chosen currency, but the total price and other prices are always in EUR. Default in EUR.
   */
  currency?: ECurrency;

  /**
   * User’s session id, should be unique per user.
   * If used, the same have to be used for all requests in session (check_flights, save_booking, confirm_payment)
   */
  visitor_uniqid?: string;
};

export type SaveBookingFlightsType = {
  visitor_uniqid?: string;

  /**
   * An optional parameter connected to the COVID-19 requirements, applicable only for specific airlines.
   * Partner can add a confirmation of the health declaration to their front end during the API flow.
   * Partner is responsible to know which airlines require health declaration and the passengers confirm that they meet the requirements.
   * The health declaration can be also confirmed in Manage Booking up to 26 hours prior to the departure.
   * The health declaration must be confirmed to avoid failed check-in.
   */
  health_declaration_checked: boolean;

  /**
   * Language, en is used as default.
   * Use format ISO 639-1 for this string, en has to be lowercase.
   */
  lang: string;

  /**
   * List of passengers with their details.
   */
  passengers: SaveBookingPassengerType[];

  /**
   * An optional parameter, en-US is used as default.
   * Use both formats ISO 639-1 and ISO 3166-1 for this string, two lowercase characters (indicating language as in lang parameter),
   * a dash, and two uppercase characters (indicating country).
   */
  locale: ETequilaLocale;

  /**
   * The same token you received in the search results and used in the ``check_flights`` request.
   */
  booking_token: string;

  /**
   * Required parameter, use the same value as in the ``check_flights`` requests.
   */
  session_id: string;

  /**
   * The baggage logic is built around definitions and combinations, that allow you to order checked baggage, cabin bag,
   * and personal item (if available in the itinerary).
   * Note that it is always necessary to order the baggage even when it is free of charge.
   * You need to send the respective combination even though you are not ordering any baggage.
   * Please refer to the Buying baggage before the itinerary is booked for the process in detail.
   */
  baggage: SaveBookingBaggageType[];

  /**
   * Applicable only for the Zooz payments.
   * The value of this parameter is payu.
   */
  payment_gateway?: string;

  /**
   * Additional servicesgit
   * The value of this parameter is payu.
   */
  additional_services?: SaveBookingAdditionalServices;
};

export type SaveBookingPassengerType = {
  /**
   * - date in YYYY-MM-DD format
   */
  birthday: string;

  /**
   * An alphanumeric string that represents a number of a travel document (ID or passport) with a maximum length of twenty characters. E.g. D54169411x
   * You can check whether we need the data in the check_flights response under document_need (please follow Important props for more details).
   */
  cardno: string;

  /**
   * Please choose the correct category according to the parameter age_category_thresholds from the check_flights response.
   */
  category: "adult" | "child" | "infant";

  /**
   * Our B2B partners need to use the email address connected to the deposit account in Tequila.
   * Using a different email might result in errors when paying for the ancillaries in MMB with the Kiwi.com credits.
   * Should you need any rerouting to a different email address for the communication related to the booking,
   * please contact us via the Tequila Helpdesk.
   */
  email: string;

  /**
   * Expiration of the travel document in YYYY-MM-DD format
   * Note that most countries require at least six months until the document expires (from the time of departure of the last flight).
   */
  expiration: string;

  /**
   * Mr and Ms only
   */
  title: "Mr" | "Mrs";

  /**
   * - first name
   * Middle name - if you need to add a middle name, please send it in this parameter in the following format: "first name|middle name".
   */
  name: string;

  /**
   * - last name
   */
  surname: string;

  /**
   * the nationality of the passenger which has to be in ISO 3166-1 alpha-2 format (not a country issuing the travel document)
   */
  nationality: string;

  /**
   * Use valid passenger's phone number. The customer's phone number will be used in the booking contact on the airline's web. Do not use your company or dummy phone number.
   * Phone number is validated as per following regexp: ^+[1-9][0-9]{7,14}$
   *     number prefix: [+] or [00]
   *     number: [0-9] digits BUT must start with no-zero digit [1-9]
   *     number length {8-15} digits (including country code)
   */
  phone: string;

  /**
   * (zooz flow only) - the currency in which the payment will be processed. You should use your company's card currency.
   * Valid only for the zooz (credit card) flow.
   * Do not use this param if you use the deposit flow. Deposit payment are always processed in EUR.
   */
  currency?: ECurrency;
};

export type SaveBookingBaggageType = {
  combination: SaveBookingCombinationType;
  passengers: number[];
};

export type SaveBookingCombinationType = {
  indices: number[];
  category: string;
  conditions: {
    passenger_groups: string[];
  };
  price: {
    currency: string;
    amount: number;
    base: number;
    service: number;
    service_flat: number;
    merchant: number;
  };
};

export type SaveBookingAdditionalServices = {
  seating: SaveBookingAdditionalServiceSeating[];
};

export type SaveBookingAdditionalServiceSeating = {
  segment_code: string;
  option: string;
  price?: SaveBookingAdditionalServicePrice;
  seats?: SaveBookingAdditionalServiceSeat[];
};

export type SaveBookingAdditionalServicePrice = {
  amount: string;
  currency: string;
  base: string;
  service: string;
  service_flat: string;
  merchant: string;
};

export type SaveBookingAdditionalServiceSeat = {
  seat: string;
  passenger_idx: number;
  price: SaveBookingAdditionalServicePrice;
};

export type ConfirmPaymentFlightType = {
  booking_id: string;
  transaction_id: string;
};

export type AncillariesOffersBookingFlightType = {
  ancillaries: Array<"seating">;
  booking_token: string;
  currency?: ECurrency;
  passengers: Array<SaveBookingPassengerType>;
  session_id: string;
};

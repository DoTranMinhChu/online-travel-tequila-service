import { ECabinType, EVehicleType } from "./tequila.enum";

export interface ISearchFlight {
  /**
   * Unique search query identifier (UUID)
   */
  search_id: string;

  /**
   * The currency parameter contains a currency code. See fx_rate response parameter as well.
   */
  currency: string;

  /**
   * The fx_rate parameter is used instead of currency_rate.
   * It contains a reverse value of the currency rate, meaning that it displays how much is 1 EUR in the requested currency (for example one GDP can be 0.84).
   * If you have not requested another currency with curr request parameter, the value of fx_rate is 1, as the currency rate to the same currency is 1 equal to 1.
   */
  fx_rate: number;

  /**
   * The data parameter is a list of individual itineraries where each itinerary is a JSON object.
   */
  data: IFlightData[];
  _results: number;
}

export interface IFlightData {
  /**
   * The id parameter is a unique itinerary identifier.
   * It consists of segment IDs.
   * Individual segment IDs inside of ID are divided by a vertical bar |.
   */
  id: string;

  /**
   * IATA code identifier of the origin airport.
   */
  flyFrom: string;

  /**
   * IATA code identifier of the destination airport
   */
  flyTo: string;

  /**
   * The name of the city of origin in the requested language (locale). In case of emergency, fallback to English
   */
  cityFrom: string;

  /**
   * Represents city code of departure city. If it does not have a city code it can be null.
   */
  cityCodeFrom?: string;

  /**
   * The name of the destination city in the requested language (locale). In case of emergency, fallback to English.
   */
  cityTo: string;

  /**
   * Represents city code of arrival city. If it does not have a city code it can be null.
   */
  cityCodeTo?: string;

  /**
   * 	The name of the country of origin in the requested locale. In case of emergency, fallback to English.
   */
  countryFrom: {
    /**
     * The origin country code.
     */
    code: string;

    /**
     * The origin country name.
     */
    name: string;
  };

  /**
   * The name of the destination country in the requested locale. In case of emergency, fallback to English.
   */
  countryTo: {
    /**
     * IATA code of destination country.
     */
    code: string;

    /**
     * Destination country name.
     */
    name: string;
  };

  /**
   * Displays a hyperlink which links a customer to Kiwi.com website.
   * This is visible only for solutions where the customer is redirected to Kiwi.com website to finish booking (metasearch and affiliate program)
   */
  deep_link?: string;

  /**
   * Time of departure in ISO timestamp format.
   */
  local_departure: string;

  /**
   * UTC departure time
   */
  utc_departure: string;

  /**
   * Time of arrival in ISO timestamp format
   */
  local_arrival: string;

  /**
   * UTC arrival time.
   */
  utc_arrival: string;

  /**
   * UTC departure time.
   */
  nightsInDest: any;

  /**
   * Exact details are subject to internal logic.
   * Use it if you want to sort your flights according to quality.
   * The lower the number the better.
   */
  quality: number;

  /**
   * Distance from the origin to the destination in km.
   */
  distance: number;

  /**
   * Represents the departure, return, and total time - all in seconds.
   */
  duration: {
    departure: number;
    return: number;
    total: number;
  };

  /**
   * The price parameter contains a price for the whole itinerary.
   * Use it always in the requested currency.
   */
  price: number;

  /**
   * which contains a list with the price displayed in two values - in the selected currency and in EUR.
   * If you selected currency in EUR, the only displayed price value will be in EUR.
   */
  conversion: {
    EUR: number;
    [key: string]: number;
  };
  fare: {
    adults: number;
    children: number;
    infants: number;
  };
  price_dropdown: {
    base_fare: number;
    fees: number;
  };
  bags_price: {
    /**
     * Price of first checked baggage
     *
     */
    "1"?: number;

    /**
     * Price of second checked baggage
     */
    "2"?: number;

    /**
     * Price of hand luggage, can be ordered as priority boarding or separately
     */
    hand?: number;
  };

  /**
   * 	Maximum dimensions and weight of baggage
   */
  baglimit: IFlightBagLimit;

  /**
   * This parameter displays a number of remaining seats if the API can get it.
   * If it can't get the exact amount, it will be null.
   */
  availability?: {
    /**
     * Number of available seats under availability object.
     */
    seats?: number;
  };
  /**
   * Contains a list of airlines on the specific route.
   */
  airlines: string[];

  /**
   * Information about route.
   */
  route: IFlightRoute[];

  /**
   * A booking_token is an encrypted string which includes information about the itinerary you chose in our search.
   * You can find it in the search response, and it is used again in the booking API.
   * The booking_token is usually generated during the search for segments and utilised throughout the booking process as the itinerary information holder.
   * Do not confuse it with the BID.
   */
  booking_token: string;

  /**
   * This parameter informs about convenience or inconvenience for facilitated booking.
   * If you do not use facilitated bookings, do not use this parameter as well.
   */
  facilitated_booking_available: boolean;

  /**
   * The pnr_count parameter represents the anticipated number of PNRs which the itinerary may contain.
   * This number is only anticipated, as it does not always correspond to the number of PNRs after the booking is created.
   */
  pnr_count: number;

  /**
   * Displays whether the departure airport has changed compared to the arrival airport (you can find this in the route information).
   */
  has_airport_change: boolean;

  /**
   * Number of technical stops. It is visible from route represented as well by 2 segments with the same flight number
   */
  technical_stops: number;

  /**
   * A parameter in the Search API response that shows the itineraries with throwaway ticketing in them.
   * These types of itineraries can be disabled per request.
   * For more information about throwaway ticketing, please refer to our FAQ.
   */
  throw_away_ticketing: boolean;

  /**
   * Optional feature that is enabled in the search setup upon request only.
   * Once enabled, the Search API response shows hidden cities itineraries (which are disabled by default)
   * and marks them with the hidden_city_ticketing flag.
   */
  hidden_city_ticketing: boolean;

  /**
   * True if there are multiple flights in a segment (outbound/return) provided by airlines that do not cooperate together or when a segment is provided by one airline, but the flights have different PNRs.
   * False if each segment is a single flight, or if all the flights in each segment are provided by one airline under one PNR.
   * If all the flights in one segment are under one PNR and all the flights in the other segment are  under a different PNR, virtual interlining will be False.
   */
  virtual_interlining: boolean;
  /**
   * Departure time in Unix timestamp format
   */
  dTime: number;

  /**
   * Departure time in UTC Unix timestamp format
   */
  dTimeUTC: number;
  /**
   * Arrival time in Unix timestamp format
   */
  aTime: number;
  /**
   * Arrival time in UTC Unix timestamp format
   */
  aTimeUTC: number;
  /**
   * Latitude of the departure location
   */
  latFrom: number;
  /**
   * Longitude of the departure location
   */
  lngFrom: number;
  /**
   * Latitude of the arrival location
   */
  latTo: number;
  /**
   * Longitude of the arrival location
   */
  lngTo: number;
  /**
   * Map ID of the departure location
   */
  mapIdfrom: string;
  /**
   *  Map ID of the arrival location
   */
  mapIdto: string;

  /**
   *  Fly time duration
   */
  fly_duration: string;
}

export interface IFlightBagLimit {
  /**
   * Height of hand baggage in cm
   */
  hand_height: number;

  /**
   * Length of hand baggage in cm
   */
  hand_length: number;

  /**
   * Weight of hand baggage in kg
   */
  hand_weight: number;

  /**
   * Width of hand baggage in cm
   */
  hand_width: number;

  /**
   * Sum of hold baggage dimensions
   */
  hold_dimensions_sum: number;

  /**
   * Height of hold baggage in cm
   */
  hold_height: number;

  /**
   * Length of hold baggage in cm
   */
  hold_length: number;

  /**
   * Weight of hold baggage in kg
   */
  hold_weight: number;

  /**
   * Width of hold baggage in cm
   */
  hold_width: number;

  personal_item_height?: number;
  personal_item_length?: number;
  personal_item_weight?: number;
  personal_item_width?: number;
}

export interface IFlightRoute {
  original_return: 0;
  /**
   * ID of a particular segment.
   */
  id: string;

  /**
   * ID of a particular segment.
   */
  combination_id: string;

  /**
   * IATA code identifier of the origin airport.
   */
  flyFrom: string;

  /**
   * IATA code identifier of the destination airport.
   */
  flyTo: string;

  /**
   * The name of the city of origin in the requested language (locale). In case of emergency, fallback to English.
   */
  cityFrom: string;

  /**
   * Represents city code of departure city. If it does not have a city code it can be null.
   */
  cityCodeFrom?: string;

  /**
   * The name of the destination city in the requested language (locale). In case of emergency, fallback to English.
   */
  cityTo: string;

  /**
   * Represents city code of arrival city. If it does not have a city code it can be null.
   */
  cityCodeTo?: string;

  /**
   * Time of departure in ISO timestamp.
   */
  local_departure: string;

  /**
   * UTC departure time.
   */
  utc_departure: string;

  /**
   * Time of arrival in ISO timestamp.
   */
  local_arrival: string;

  /**
   * UTC arrival time.
   */
  utc_arrival: string;

  /**
   * Represents the name of a marketing carrier.
   */
  airline: string;

  /**
   * Represents flight number
   */
  flight_no: number;

  /**
   * Represents code of the operating carrier.
   * This may not always be a reliable or available source of data.
   */
  operating_carrier: string;

  /**
   * Flight number of the operating (flying) carrier. It may not always be available.
   */
  operating_flight_no: string;

  /**Internal parameter, do not use. */
  fare_basis?: string;

  /**Reflects the fare selected in selected_cabins.
   * The values of fares are: M (economy), W (economy premium), C (business), F (first class).
   * If selected_cabins are not used, default value M (economy class is used as default.) */
  fare_category: ECabinType;

  /**
   * Internal parameter, do not use.
   */
  fare_classes?: string;

  /**
   * This parameter indicates whether the segment is outbound or inbound sector. 0 for no, 1 for yes.
   */
  return: number;

  /**
   * This parameter displayes whether bags need to be rechecked or not for a particular segment.
   * If true - bags need to be rechecked, false - no need to recheck bags.
   */
  bags_recheck_required: boolean;

  /**
   * Information whether the connection between two segments is virtually interlined.
   * Additional parameter to existing “virtual_interlining” parameter.
   */
  vi_connection: boolean;

  /**
   * The guarantee parameter identifies if the segment is covered by Kiwi.com guarantee
   */
  guarantee: boolean;

  /**
   * Internal parameter, do not use
   */
  equipment?: string;

  /**
   * This parameter can contain the following values: bus, train, plane.
   */
  vehicle_type: EVehicleType;

  /**
   * Departure time in Unix timestamp format
   */
  dTime: number;

  /**
   * Departure time in UTC Unix timestamp format
   */
  dTimeUTC: number;
  /**
   * Arrival time in Unix timestamp format
   */
  aTime: number;
  /**
   * Arrival time in UTC Unix timestamp format
   */
  aTimeUTC: number;
  /**
   * Latitude of the departure location
   */
  latFrom: number;
  /**
   * Longitude of the departure location
   */
  lngFrom: number;
  /**
   * Latitude of the arrival location
   */
  latTo: number;
  /**
   * Longitude of the arrival location
   */
  lngTo: number;
  /**
   * Map ID of the departure location
   */
  mapIdfrom: string;
  /**
   *  Map ID of the arrival location
   */
  mapIdto: string;
}

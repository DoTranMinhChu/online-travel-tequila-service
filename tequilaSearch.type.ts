import {
  ECabinType,
  ECurrency,
  EFlyDaysType,
  ETequilaLangueCode,
  EVehicleType,
} from "./tequila.enum";

export type SearchFlightsType = {
  /**
   * Kiwi ID of the departure location. Usually it's the airport's IATA.
   * It accepts multiple values separated by a comma.
   * You can get the valid IDs using the Locations API.
   * these IDs might be airport codes, city IDs, two letter country codes,
   *  metropolitan codes and radiuses as well as a subdivision, region,
   * autonomous_territory, continent and specials (Points of interest, such as Times Square).
   *
   * For example: 'LON' - checks every airport in London, 'LHR' - checks flights from London Heathrow, 'UK' - flights from the United Kingdom.
   * Some locations have the same code for airport and metropolis (city), e.g.
   * DUS stands for metro code Duesseldorf, Moenchengladbach and Weeze as well as Duesseldorf airport.
   * See the following examples:
   *    'fly_from=city:DUS' will match all airports in "DUS", "MGL" and "NRN" (all in the city of Duesseldorf)
   *    'fly_from=airport:DUS' will only match airport "DUS"
   * You can also search using a radius. It needs to be in form lat-lon-xkm.
   * The number of decimal places for radius is limited to 6.
   * E.g.-23.24--47.86-500km for places around Sao Paulo.
   */
  fly_from: string;

  /**
   * Kiwi ID of the arrival location.  It accepts the same values in the same format as the 'fly_from' parameter
   * If you don’t include any value you’ll get aggregated results for destination airports relevant to the departure location.
   */
  fly_to?: string;
  /**
   * departure date (dd/mm/yyyy). Use parameters date_from and date_to to define the range for the outbound flight departure.
   * For example, parameters 'date_from=01/04/2021' and 'date_to=03/04/2021'
   * mean that the departure can be anytime between the specified dates, i.e. on 01/04, 02/04 or 03/04. For the dates of the return flights,
   * use the 'return_to' and 'return_from' or 'nights_in_dst_from' and 'nights_in_dst_to' parameters.
   * If you are searching for a one-way flight, omit 'return_to' and 'return_from' or 'nights_in_dst_from' and 'nights_in_dst_to'.
   */
  date_from: string;

  /**
   * departure date (dd/mm/yyyy). Use parameters date_from and date_to to define the range for the outbound flight departure.
   */
  date_to: string;

  /**
   * return date (dd/mm/yyyy). Use parameters return_from and return_to to define the range for the return flight departure.
   */
  return_from?: string;

  /**
   * return date (dd/mm/yyyy). Use parameters return_from and return_to to define the range for the return flight departure.
   */
  return_to?: string;

  /**
   * the minimal length of stay in the destination given in the fly_to parameter.
   */
  nights_in_dst_from?: number;

  /**
   * the maximal length of stay in the destination given in the fly_to parameter.
   * Either both parameters 'nights_in_dst_to' and 'nights_in_dst_from' have to be specified or none of them.
   */
  nights_in_dst_to?: number;

  /**
   * max itinerary duration in hours, min value 0
   */
  max_fly_duration?: number;

  /**
   * Defines, whether or not to search for itineraries leaving from a different city than what is the customer's outbound destination.
   * Set to true by default.
   */
  ret_from_diff_city?: boolean;

  /**
   * Defines,whether or not to search for itineraries returning to a different city than the one from where the customer departed.
   *  Set to true by default.
   */
  ret_to_diff_city?: boolean;

  /**
   * It returns the cheapest flight to every city covered by the fly_to parameter. E.g.
   * if you set it to 1 and your search is from PRG to LON/BUD/NYC,
   * you'll get 3 results: the cheapest PRG-LON, the cheapest PRG-BUD, and the cheapest PRG-NYC.
   * one_for_city and one_per_date query parameters work only on one-way requests.
   * In case you want to create Return Trip itinerary calendar,
   * you need to request Outbound and Inbound segments separately.
   */
  one_for_city?: number;

  /**
   * returns the cheapest flights for each date in the range defined by date_from and date_to.
   * one_for_city and one_per_date query parameters work only on one-way requests.
   * In case you want to create Return Trip itinerary calendar, you need to request Outbound and Inbound segments separately.
   */
  one_per_date?: number;

  /**
   * Used to specify the number of adults.
   * The default value is 1.
   * The sum of adults, children and infants cannot be greater than 9.
   * Please note, that most of the airlines consider children older than 12 as adults.
   * The actual age thresholds will be listed in the check_flights response
   */
  adults?: number;

  /**
   * It specifies the number of children.
   * The default value is 0.
   * The sum of adults, children and the infants cannot be greater than 9.
   * Please note, that most of the ailines considers children older than 12 as adults.
   * The actual age thresholds will be listed in the check_flights response.
   */
  children?: number;

  /**
   * Used to specify the number of infants.
   * The default value is 0.
   * The sum of adults, children and infants cannot be greater than 9.
   */
  infants?: number;

  /**
   * Specifies the preferred cabin class.
   * Cabins can be: M (economy), W (economy premium), C (business), or F (first class).
   * There can be only one selected cabin for one call. Cannot be used for ground (train, bus) content.
   */
  selected_cabins?: ECabinType;

  /**
   * Allows the client to combine different cabin classes in their request.
   * Cannot be used for ground (train, bus) content.
   * If you use this param, you must use it together with selected_cabins.
   * The results will then include itineraries combining the classes defined in selected_cabins and this param.
   * mix_with_cabins class must be lower than the selected_cabins class.
   * Itineraries consisting of more than one cabin class follow this rules:
   *  1. The total time spent in higher class segments (GDS) of a single sector is at least 50% of the total sector's traveling time.
   *  2. Any segment with traveling time longer than four hours (long-haul) is with the higher cabin class.
   */
  mix_with_cabins?: ECabinType;

  /**
   * Number of adult hold bags separated by commas.
   * The first number represents the number of bags for passenger 1, the second number is for passenger 2, etc.
   * Can only contain up to two hold bags per passenger.
   *
   * Example: 1,0
   */
  adult_hold_bag?: string;

  /**
   * Number of adult hand bags separated by commas.
   * The first number represents the number of bags for passenger 1, the second number is for passenger 2 etc.
   * Can only contain up to one hand bag per passenger.
   *
   * Example: 1,1
   */
  adult_hand_bag?: string;

  /**
   * Number of child hold bags separated by commas.
   * The first number represents the number of bags for passenger 1, the second number is for passenger 2 etc.
   * Can only contain up to two hold bags per passenger.
   *
   * Example: 2,1
   */
  child_hold_bag?: string;

  /**
   * Number of child hand bags separated by commas.
   * The first number represents the number of bags for passenger 1, the second number is for passenger 2 etc.
   * Can only contain up to one hand bag per passenger.
   *
   * Example: 1,1
   */
  child_hand_bag?: string;

  /**
   * he list of week days for the flight, where 0 is Sunday, 1 is Monday, etc.
   * You can include more days than one, e.g. '&fly_days=0&fly_days=1&fly_days=2&...&fly_days=6'
   */
  fly_days?: number | Array<number>;

  /**
   * used to specify whether the fly_days day is for an arrival or a departure flight.
   */
  fly_days_type?: EFlyDaysType;

  /**
   * the list of week days for the flight, where 0 is Sunday, 1 is Monday, etc.
   * URL encoded format for all days: '&ret_fly_days=0&ret_fly_days=1&ret_fly_days=2&...&ret_fly_days=6'
   */
  ret_fly_days?: number | Array<number>;

  /**
   * type of set ret_fly_days; It  is used to specify whether the flight is an arrival or a departure.
   */
  ret_fly_days_type?: EFlyDaysType;

  /**
   * search flights with departure only on working days.
   */
  only_working_days?: boolean;

  /**
   * search flights with departure only on weekends.
   */
  only_weekends?: boolean;

  /**
   * The market of a particular country from which the request originates.
   * Use ISO 3166-1 alpha-2 to fill in the value.
   */
  partner_market?: string;

  /**
   * use this parameter to change the currency in the response
   */
  curr?: ECurrency;

  /**
   * the language of city names in the response and also language of kiwi.com website to which deep_links lead
   *
   * Example : vn
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * result filter, minimal price
   */
  price_from?: number;

  /**
   * result filter, maximal price
   */
  price_to?: number;

  /**
   * result filter, min. departure time (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  dtime_from?: string;

  /**
   * result filter, max departure time (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  dtime_to?: string;

  /**
   * result filter, min arrival time (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  atime_from?: string;

  /**
   * result filter, max arrival time (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  atime_to?: string;

  /**
   * result filter, min dep. time of the returning flight (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  ret_dtime_from?: string;

  /**
   * result filter, max dep. time of the returning flight (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  ret_dtime_to?: string;

  /**
   * result filter, min arrival time of the returning flight (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  ret_atime_from?: string;

  /**
   * result filter, min arrival time of the returning flight (use only time in whole hours, not minutes; 11:00 means 11AM, 23:00 means 11PM).
   */
  ret_atime_to?: string;

  /**
   * result filter, min length of stopover, 48:00 means 2 days (48 hours)
   */
  stopover_from?: string;

  /**
   * result filter, max length of stopover, 48:00 means 2 days (48 hours)
   */
  stopover_to?: string;

  /**
   * max number of stopovers per the entire itinerary (outbound + return).
   * Use 'max_stopovers=0' for direct flights only.
   */
  max_stopovers?: number;

  /**
   * max number of stopovers per itinerary's sector.
   */
  max_sector_stopovers?: number;

  /**
   * whether or not to search for connections requiring an airport change, can be set to 0 or 1.
   * The param is disabled for all non-Affiliate solutions.
   * Follow FAQ "Itineraries with connection on different airport" for more details
   */
  conn_on_diff_airport?: number;

  /**
   * whether or not to search for flights leaving from a different airport than where the customer landed, can be set to 0 or 1, 1 is default
   */
  ret_from_diff_airport?: 1 | 0;

  /**
   * whether or not to search for flights returning to a different airport than the one from where the customer departed, can be set to 0 or 1, 1 is default
   */
  ret_to_diff_airport?: 1 | 0;

  /**
   * a list of airlines (IATA codes) separated commas that should / should not be included in the search.
   * The selection or omission of the airlines depends on the 'select_airlines_exclude' parameter.
   * Select a list of airlines and use the 'select_airlines_exclude' parameter to specify whether
   * or not the selected airlines should be excluded/included in the search.
   * */
  select_airlines?: string | Array<string>;

  /**
   * a switch for the selected_airlines parameter where 'False=select' and 'True=omit'.
   * If set to true, the search returns combinations without the airlines specified in the parent parameter selected_airlines.
   * If set to false, the search returns combinations operated only by the selected airlines.
   */
  select_airlines_exclude?: boolean;

  /**
   * a list of stopover airports (IATA codes) separated by commas that should / should not be included.
   * The selection or omission of the airport depends on the 'select_stop_airport_exclude' parameter.
   */
  select_stop_airport?: string;

  /**
   * A switch for the 'select_stop_airport' parameter where 'False=include' and 'True=omit'.
   * If set to true the search returns combinations where a stopover is through one of the given airports.
   * If is set to false the search returns combinations where none of stopovers is through any of the given airports.
   */
  select_stop_airport_exclude?: boolean;

  /**
   * this parameter allows you to specify the vehicle type. The options are aircraft (default), bus, train.
   */
  vehicle_type?: EVehicleType;

  /**
   * if set to false, this param will exclude all virtually interlined content.
   * If set to true, the default results will be returned (with both virtually interlined content and not-virtually interlined content).
   * It cannot be used to request only virtually inerlined content. Default value is true.
   */
  enable_vi?: boolean;

  /**
   * sorts the results by quality, price, date or duration. Price is the default value.
   */
  sort?: string;

  /**
   * limit number of results; the default value is 200; max is 1000
   */
  limit?: number;
};

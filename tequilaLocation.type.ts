import {
  EEngagementMetricTequilaType,
  ETequilaLangueCode,
  ETequilaLocationType,
} from "./tequila.enum";

export type SearchLocationByQueryType = {
  /**
   * Searched term (for suggestions).
   * This parameter expects a full IATA code.
   * If IATA code is not given, the search will go through other available fields: 'id', 'name' or 'code' of the location.
   *
   * Example : SGN
   *
   * @type {string}
   *
   * */
  term: string;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired location output.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : airport
   *
   * @type {ETequilaLocationType | Array<ETequilaLocationType>}
   */
  location_types: ETequilaLocationType | Array<ETequilaLocationType>;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;
};

export type SearchLocationByRadiusType = {
  /**
   * Latitude of the centre point of the search.  40.7 is also acceptable.
   * Example : 40.730610
   */
  lat?: string;

  /**
   * Longitude of the centre point of the search.  -73.9 is also acceptable.
   * Example : -73.935242
   */
  lon?: string;

  /**
   * Identifier of the location - slug or id (you cannot specify  coordinates & term in the same request).
   *
   * Example : SGN
   *
   * @type {string}
   *
   * */
  term?: string;

  /**
   * The radius defaults to 250 km but can be changed.
   *
   * @type {number}
   *
   * */
  radius?: number;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired location output.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : airport
   *
   * @type {ETequilaLocationType | Array<ETequilaLocationType>}
   */
  location_types: ETequilaLocationType | Array<ETequilaLocationType>;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;
};

export type SearchLocationByBoxType = {
  /**
   * Latitude of southwest corner of geo box search; 40.2 is also acceptable.
   * Example : 40.200610
   */
  low_lat: string;

  /**
   * Longitude of southwest corner of geo box search; -74.6 is also acceptable.
   * Example : -74.624328
   */
  low_lon: string;

  /**
   * Latitude of northeast corner of geo box search; 44.7 is also acceptable.
   * Example : 44.763212
   */
  high_lat: string;

  /**
   * Longitude of northeast corner of geo box search; -73.3 is also acceptable.
   * Example : -73.376543
   */
  high_lon: string;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired location output.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : airport
   *
   * @type {ETequilaLocationType | Array<ETequilaLocationType>}
   */
  location_types: ETequilaLocationType | Array<ETequilaLocationType>;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;
};

export type SearchLocationByIdType = {
  /**
   * This is the exact IATA airport or ISO3166 location code - station, airport, city, autonomous_territory, subdivision, country, region, continent.
   * Multiple ids can be specified by appending
   * Example : PRG
   */
  id: string | Array<string>;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;
};

export type GetLocationDumpType = {
  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;

  /**
   * To get more locations than is set limit for locations API use this parameter as follows.
   * First, search without the search_after param. The response contains the search_afterfield.
   * For the next request, use this parameter in form: search_after=0qh&search_after=station#0b000000000010000101000010111101.
   * Example : List [ "ᒕ呁ধᐒ妉簄ᰃ峃渄䀀\u0001", "airport0b000000000010001000101111110010" ]
   *
   * Example : [ "ᒕ呁ধᐒ妉簄ᰃ峃渄䀀\u0001", "airport0b000000000010001000101111110010" ]
   *
   * @type {Array<string>}
   */
  search_after?: Array<string>;
};

export type SearchLocationTopDestinationsType = {
  /**
   * The identifier of the start point - slug or id (airport, station, bus_station, city, subdivision, autonomous_territory, country)
   *
   * Example : london_gb , VDH , ho-chi-minh-city_vn
   *
   * @type {string | Array<string>}
   *
   * */
  term: string | Array<string>;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;

  /**
   * Based on searches (default), bookings or clicks
   *
   * Example : searches
   *
   * @type {EEngagementMetricTequilaType}
   */
  source_popularity?: EEngagementMetricTequilaType;
};

export type SearchLocationByHashtag = {
  /**
   * The hashtag that the returned location have to be tagged with.
   *
   * Example : "beach","family fun","sightseeing","nightlife"
   *
   * @type {string}
   *
   * */
  hashtag: string;

  /**
   * The identifier of the location the returned locations should be part of - id
   * (airport, station, bus_station, city, subdivision, autonomous_territory, country).
   *
   * Example : "FR","VN"
   *
   * @type {string}
   *
   * */
  term?: string;

  /**
   * The month in which the hashtag should be valid.
   * Multiple values are allowed.
   *
   * Example : 1 , 2 ,3 ,4 ,5
   *
   * @type {number | Array<number>}
   *
   * */
  month?: number | Array<number>;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;

  /**
   * Based on searches (default), bookings or clicks
   *
   * Example : searches
   *
   * @type {EEngagementMetricTequilaType}
   */
  source_popularity?: EEngagementMetricTequilaType;
};

export type SearchLocationByTopHashtags = {
  /**
   * The identifier of the start point - id (airport, station, bus_station, city, subdivision, autonomous_territory, country)
   * More than one is possible.
   *
   * Example : london_gb , VDH , ho-chi-minh-city_vn
   *
   * @type {string}
   *
   * */
  term: string | Array<string>;

  /**
   * Based on searches (default), bookings or clicks
   *
   * Example : searches
   *
   * @type {EEngagementMetricTequilaType}
   */
  source_popularity?: EEngagementMetricTequilaType;

  /**
   * Based on searches, bookings or clicks.
   * Can be left blank.
   * Used if not enough results is returned by source_popularity.
   *
   * Example : bookings
   *
   * @type {EEngagementMetricTequilaType}
   */
  fallback_popularity?: EEngagementMetricTequilaType;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;
};

export type SearchLocationBySEOUrl = {
  /**
   * The exact slug code of the airport, station, bus_station, city, autonomous_territory, subdivision, country, region, continent.
   *
   * Example : albany-new-york-united-states
   *
   * @type {string}
   *
   * */
  term: string;

  /**
   * Desired locale output - this is the language of the results.
   * Should any other locale be used other than the specified locales, en-US is used.
   *
   * Example : en-US
   *
   * @type {ETequilaLangueCode}
   */
  locale?: ETequilaLangueCode;

  /**
   * Desired number of results in the output. Default value = 10.
   *
   * Example : 10
   *
   * @type {number}
   */
  limit?: number;

  /**
   * It displayes all active locations. Default value = true.
   *
   * Example : true
   *
   * @type {boolean}
   */
  active_only?: boolean;

  /**
   * Desired order of the output.  For A->Z use 'sort=name', for Z->A use 'sort=-name'.
   *
   * Example : price
   *
   * @type {string}
   */
  sort?: string;
};

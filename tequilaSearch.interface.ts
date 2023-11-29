export interface ISearchFlight {
  search_id: string;
  currency: string;
  fx_rate: number;
  data: IFlightData[];
  _results: number;
}

export interface IFlightData {
  id: string;
  flyFrom: string;
  flyTo: string;
  cityFrom: string;
  cityCodeFrom: string;
  cityTo: string;
  cityCodeTo: string;
  countryFrom: {
    code: string;
    name: string;
  };
  countryTo: {
    code: string;
    name: string;
  };
  local_departure: string;
  utc_departure: string;
  local_arrival: string;
  utc_arrival: string;
  nightsInDest: any;
  quality: number;
  distance: number;
  duration: {
    departure: number;
    return: number;
    total: number;
  };
  price: number;
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
    "1"?: number;
    "2"?: number;
    hand?: number;
  };
  baglimit: IFlightBagLimit;
  availability: {
    seats?: number;
  };
  airlines: string[];
  route: IFlightRoute[];
  booking_token: string;
  facilitated_booking_available: boolean;
  pnr_count: number;
  has_airport_change: boolean;
  technical_stops: number;
  throw_away_ticketing: boolean;
  hidden_city_ticketing: boolean;
  virtual_interlining: boolean;
}

export interface IFlightBagLimit {
  hand_height: number;
  hand_length: number;
  hand_weight: number;
  hand_width: number;
  hold_dimensions_sum: number;
  hold_height: number;
  hold_length: number;
  hold_weight: number;
  hold_width: number;
  personal_item_height?: number;
  personal_item_length?: number;
  personal_item_weight?: number;
  personal_item_width?: number;
}

export interface IFlightRoute {
  id: string;
  combination_id: string;
  flyFrom: string;
  flyTo: string;
  cityFrom: string;
  cityCodeFrom: string;
  cityTo: string;
  cityCodeTo: string;
  local_departure: string;
  utc_departure: string;
  local_arrival: string;
  utc_arrival: string;
  airline: string;
  flight_no: number;
  operating_carrier: string;
  operating_flight_no: string;
  fare_basis: string;
  fare_category: string;
  fare_classes: string;
  return: number;
  bags_recheck_required: boolean;
  vi_connection: boolean;
  guarantee: boolean;
  equipment?: string;
  vehicle_type: string;
}

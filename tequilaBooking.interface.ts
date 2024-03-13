export interface IBookingFlight {
  session_id: string;
  server_time: number;
  pnum: number;
  flights: IBookingFlightData[];
  flights_checked: boolean;
  flights_to_check: boolean;
  flights_real_checked: boolean;
  flights_invalid: boolean;
  max_passengers: number;
  document_options: {
    document_need: number;
    checkin_date: number;
    airport_checkin_price: number;
  };
  visas_agreement_requiered: boolean;
  transfers: any[];
  route: string[];
  book_fee: number;
  fee_airline: number;
  extra_fee: number;
  flights_price: number;
  passenger_change: boolean;
  price_change: boolean;
  total: number;
  orig_price_usage: boolean;
  sp_fee: number;
  flight_real_price: number;
  one_passenger: number;
  credits_price: number;
  tickets_price: number;
  orig_price: number;
  adults_price: number;
  children_price: number;
  infants_price: number;
  booking_token: string;
  infants_conditions: {
    trolley: boolean;
    hand_weight: number;
  };
  bags_price: {
    "1": number;
    "2": number;
  };
  luggage: any[];
  segments: any[];
  currency: string;
  conversion: IBookingFlightConversion;
  adult_threshold: number;
  age_category_thresholds: {
    adult: number;
    child: number;
  };
  insurance_price: {
    travel_basic: number;
    travel_plus: number;
  };
  additional_services: any;
  margin_state_id: string;
  baggage: IBookingFlightBaggage;
  mandatory_ancillaries: boolean;
  eur_payment_price: number;
}

export interface IBookingFlightData {
  id: string;
  combination_trip_id: string;
  original_trip_id: string;
  dst: string;
  src: string;
  flight_no: string;
  operating_flight_no: string;
  carrier_segment_code: string;
  airline: IBookingFlightAirlineData;
  operating_airline: {
    iata: string;
    name: string;
    public_code: string;
    hide_name: boolean;
  };
  scraping_start: number;
  extras: string;
  vehicle: {
    type: string;
  };
  src_terminal: any;
  dst_terminal: any;
  passengers_flight_check: {
    [key: string]: {
      eur: number;
      invalid: boolean;
      last_checked: number;
    };
  };
  price: number;
  eur_children: number;
  eur_infants: number;
  eur: number;
  found_on: string;
  invalid: number;
  timestamp: string;
  refreshed: string;
  refresh_ttl: number;
  refresh_period: number;
  fare_basis: string;
  fare_category: string;
  fare_restriction: any;
  fare_class: any;
  baggage_fare: string;
  source: string;
  combination_prices: {
    segment_included_bags: {
      amount: number;
      concept: string;
    }[];
    price: number;
  }[];
  price_id: string;
  seats: number;
  source_name: string;
  source_url: string;
  checkin: string;
  src_country: string;
  dst_country: string;
  src_station: string;
  dst_station: string;
  infants_conditions: {
    trolley: boolean;
    hand_weight: number;
  };
  max_passengers_for_price: number;
  src_name: string;
  dst_name: string;
  hiding_reason: any;
  return: number;
  is_self_transfer: boolean;
  bags_recheck_required: boolean;
  bags_recheck_disclaimer: string;
  segment_pricing: {
    adult: ISegmentData;
    child: ISegmentData;
    infant: ISegmentData;
  };
  sector: number;
  forced_priority_boarding: boolean;
  local_arrival: string;
  utc_arrival: string;
  local_departure: string;
  utc_departure: string;
}

export interface IBookingFlightAirlineData {
  id: number;
  code: string;
  iata_code: string;
  icao_code: string;
  code_public: string;
  name: string;
  alliance: any;
  url: string;
  checkin: number;
  close_booking_hours: number;
  booking_doc_needed: number;
  airport_checkin: number;
  passengers_in_search: number;
  doing_online_checkin: number;
  maximum_passengers: number;
  grade: string;
  virtual_card_req: boolean;
  country: string;
  carrier_type: string;
  parent_carrier: any;
  checkin_closure: number;
  shorter_stopovers_allowed: number;
  allowed_booking_window: any;
  deprecated: boolean;
  book_fee: number;
  fee_airline: number;
  search_priority: number;
  fee_instead: number;
  fee_percent: number;
  flight_change_fee: number;
  fee_reason: string;
  threshold_child: number;
  threshold_teen: number;
  threshold_adult: number;
  fees_per_source: any;
  affil_url: any;
  temporary_disabled: any;
  non_active_reason: string;
  lcc: any;
  active: number;
  iatacode: string;
  is_passenger_cardholder: any;
  is_private_fares_allowed: any;
  luggage_only_during_checkin_airlines: any;
  luggage_only_on_web: any;
  mmb_link: string;
  payment_card_copy_eticket_requirement: boolean;
  skip_subairline_merge: any;
  Name: string;
  iata: string;
  hide_name: boolean;
  hand_length: any;
  hand_width: any;
  hand_height: any;
  hand_weight: any;
  hold_weight: number;
  hold_length: number;
  hold_width: number;
  hold_height: number;
  hand2_length: number;
  hand2_width: number;
  hand2_height: number;
  hand2_weight: number;
  hand2_note: string;
  hand_note: string;
  hold_note: string;
}

export interface ISegmentData {
  currency: string;
  amount: string;
  base: string;
  service: string;
  service_flat: string;
  merchant: string;
}

export interface IBookingFlightConversion {
  currency: string;
  amount: number;
  bags_price: {
    "1": number;
    "2": number;
  };
  adults_price: number;
  children_price: number;
  infants_price: number;
}

export interface IBookingFlightBaggage {
  definitions: IBookingFlightBaggageDefinition;
  combinations: IBookingFlightBaggageDefinition;
  notices: any;
}

export interface IBookingFlightBaggageDefinition {
  hold_bag: IBookingFlightBag[];
  hand_bag: IBookingFlightBag[];
}

export interface IBookingFlightBag {
  price: IBookingFlightPrice;
  conditions: IBookingFlightConditions;
  is_hold: boolean;
  category: string;
  restrictions: IBookingFlightRestrictions;
}

export interface IBookingFlightPrice {
  currency: string;
  amount: number;
  base: number;
  service: number;
  service_flat: number;
  merchant: number;
}

export interface IBookingFlightConditions {
  passenger_groups: string[];
  is_priority?: string[];
}

export interface IBookingFlightRestrictions {
  dimensions_sum: number;
  weight: number;
  length: number;
  height: number;
  width: number;
}

// ======== Ancillaries Offers ========

export interface IAncillariesOffersBookingFlight {
  seating: ISeatingAncillariesOffer;
  session_id: string;
}

export interface ISeatingAncillariesOffer {
  offers: IAncillariesOffer[];
  status: string;
  ttl: number;
}

export interface IAncillariesOffer {
  is_final: boolean;
  quick_options: IAncillariesOfferQuickOption[];
  seatmap: IAncillariesOfferSeatMap;
  segment_code: string;
}

export interface IAncillariesOfferQuickOption {
  option: string;
  price: IAncillariesOffersBookingFlightPrice;
}

export interface IAncillariesOffersBookingFlightPrice {
  amount: string;
  base: string;
  currency: string;
  merchant: string;
  service: string;
  service_flat: string;
}

export interface IAncillariesOfferSeatMap {
  sections: IAncillariesOfferSeatMapSection[];
}

export interface IAncillariesOfferSeatMapSection {
  deck: string;
  rows: ISeatMapSectionRow[];
  section_class: string;
}

export interface ISeatMapSectionRow {
  row_number: number;
  seat_groups: ISeatMapSectionRowSeatGroup[][];
}

export interface ISeatMapSectionRowSeatGroup {
  column: string;
  features: string[];
  name: string;
  price: IAncillariesOffersBookingFlightPrice;
  seat_class: string;
  state: string;
  type: string;
}

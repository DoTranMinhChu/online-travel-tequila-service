export interface ITequilaLocationQuery {
  locations: ITequilaLocation[];
  meta: {
    locale: {
      code: string;
      status: string;
    };
  };
  last_refresh: number;
  results_retrieved: number;
}

export interface ITequilaLocation {
  id: string;
  int_id: number;
  airport_int_id: number;
  active: boolean;
  code: string;
  icao: string;
  name: string;
  slug: string;
  slug_en: string;
  alternative_names: string[];
  rank: number;
  global_rank_dst: number;
  dst_popularity_score: number;
  timezone: string;
  city: City;
  location: ILocation;
  alternative_departure_points: ITequilaPoint[];
  tags: ITequilaTag[];
  providers: number[];
  special: ITequilaBaseInformationSpace[];
  tourist_region: ITequilaBaseInformationSpace[];
  car_rentals: ITequilaCarRental[];
  new_ground: boolean;
  routing_priority: number;
  type: string;
}
export interface ILocation {
  lat: number;
  lon: number;
}
export interface City {
  id: string;
  name: string;
  code: string;
  slug: string;
  subdivision?: ITequilaInformationSpace;
  autonomous_territory: string;
  continent: ITequilaInformationSpace;
  country: ITequilaInformationSpace;
  nearby_country: string;
  region: ITequilaBaseInformationSpace;
}
export interface ITequilaBaseInformationSpace {
  id: string;
  name: string;
  slug: string;
}
export interface ITequilaInformationSpace extends ITequilaBaseInformationSpace {
  code: string;
}

export interface ITequilaPoint {
  id: string;
  distance: number;
  duration: number;
}

export interface ITequilaTag {
  tag: string;
  month_to: number;
  month_from: number;
}

export interface ITequilaCarRental {
  provider_id: number;
  providers_locations: string[];
}

import { EStatusesRefund, ETequilaLocale } from "./tequila.enum";

export interface IAuthToken {
  authorization_token: string;
}

export interface IRefundBooking {
  booking_id: number;
  created_at: Date | string;
  id: number;
  refund_state: EStatusesRefund;
}

export interface IPassengerBooking {
  birth_date: string;
  category: "adult" | "child" | "infant";
  document_expiry: string;
  document_number: string;
  first_name: string;
  id: number;
  is_contact_passenger: boolean;
  last_name: string;
  middle_name: string;
  nationality: ETequilaLocale;
  title: string;
}
export interface IBookingPassengers {
  passengers: Array<IPassengerBooking>;
}

export interface Address {
  label: string;
  countryCode: string;
  countryName: string;
  stateCode: string;
  state: string;
  countyCode: string;
  county: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
  houseNumber: string;
}

export interface Position {
  lat: number;
  lng: number;
}

export interface MapView {
  west: number;
  south: number;
  east: number;
  north: number;
}

export interface Access {
  lat: number;
  lng: number;
}

export interface Item {
  title: string;
  id: string;
  resultType: string;
  houseNumberType: string;
  address: Address;
  position: Position;
  access: Access[];
  mapView: MapView;
}

export interface ApiResponse {
  items: Item[];
}
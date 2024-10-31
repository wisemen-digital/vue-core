export interface Address {
  bus: string
  city: string
  coordinates: {
    lat: null | number
    lng: null | number
  }
  country: string
  postalCode: string
  street: string
  streetNumber: string
}

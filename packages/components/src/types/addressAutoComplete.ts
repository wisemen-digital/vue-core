export interface Address {
  bus: string
  city: string
  coordinates: {
    lat: number | null
    lng: number | null
  }
  country: string
  postalCode: string
  street: string
  streetNumber: string
}

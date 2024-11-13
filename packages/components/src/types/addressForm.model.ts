export interface AddressCoordinates {
  latitude: number | null
  longitude: number | null
}
export interface AddressForm {
  bus: string | null
  city: string
  coordinates: AddressCoordinates
  country: string
  number: string
  postalCode: string
  street: string
}

export const EMPTY_ADDRESS_FORM: AddressForm = {
  bus: null,
  city: '',
  coordinates: {
    latitude: null,
    longitude: null,
  },
  country: '',
  number: '',
  postalCode: '',
  street: '',
}

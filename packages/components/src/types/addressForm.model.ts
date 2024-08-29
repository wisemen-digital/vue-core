export interface AddressCoordinates {
  latitude: null | number
  longitude: null | number
}
export interface AddressForm {
  bus: null | string
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

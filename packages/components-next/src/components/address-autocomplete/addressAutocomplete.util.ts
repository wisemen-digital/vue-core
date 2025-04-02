import type {
  Address,
  AddressComponentType,
} from '@/components/address-autocomplete/addressAutocomplete.type'

function findAddressComponent(
  addressComponents: google.maps.places.AddressComponent[],
  type: AddressComponentType,
): google.maps.places.AddressComponent | null {
  return addressComponents.find((component) => component.types[0] === type) ?? null
}

export async function getAddressByPlaceId(placeId: string): Promise<Address> {
  const place = new google.maps.places.Place({
    id: placeId,
  })

  await place.fetchFields({
    fields: [
      'addressComponents',
      'location',
    ],
  })

  const lat = place.location?.lat() ?? null
  const lng = place.location?.lng() ?? null

  return {
    bus: '',
    city: findAddressComponent(place.addressComponents ?? [], 'locality')?.longText ?? '',
    coordinates: {
      lat,
      lng,
    },
    country: findAddressComponent(place.addressComponents ?? [], 'country')?.shortText ?? '',
    postalCode: findAddressComponent(place.addressComponents ?? [], 'postal_code')?.longText ?? '',
    street: findAddressComponent(place.addressComponents ?? [], 'route')?.longText ?? '',
    streetNumber: findAddressComponent(place.addressComponents ?? [], 'street_number')?.longText ?? '',
  }
}

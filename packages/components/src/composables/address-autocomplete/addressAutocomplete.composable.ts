import { Loader } from '@googlemaps/js-api-loader'
import { onMounted } from 'vue'

import { useToast } from '@/composables/toast/toast.composable'
import { getGlobalConfig } from '@/config/globalConfig'
import type {
  AddressCoordinates,
  AddressForm,
} from '@/types/addressForm.model'
import type { DataItem } from '@/types/dataItem.type'

export type PlaceResult = google.maps.places.PlaceResult
export type GeocoderAddressComponent = google.maps.GeocoderAddressComponent
export type PlacesServiceStatus = google.maps.places.PlacesServiceStatus
export type AutoCompletePrediction = google.maps.places.AutocompletePrediction

type AddressComponentType = 'country' | 'locality' | 'postal_code' | 'route' | 'street_number'

export function useAddressAutoComplete(): {
  getAddressFormByPlaceId: (placeId: string) => Promise<AddressForm>
  fetchPredictions: (searchString: string) => Promise<DataItem<string>[]>
} {
  const toast = useToast()

  let loader: Loader | null

  async function fetchPredictions(searchString: string): Promise<DataItem<string>[]> {
    if (searchString.length === 0) {
      return []
    }

    try {
      const autocompleteService = new google.maps.places.AutocompleteService()
      const response = await autocompleteService.getPlacePredictions(
        { input: searchString, types: [
          'address',
        ] },
        (predictions: AutoCompletePrediction[] | null, status: PlacesServiceStatus) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            return predictions ?? []
          }
        },
      )

      return response.predictions.map((prediction) => mapAutoCompletePredictionToDataItem(prediction))
    }
    catch (error) {
      toast.error({ title: 'Error', description: 'Failed to fetch address predictions' })

      return []
    }
  }

  async function getAddressFormByPlaceId(placeId: string): Promise<AddressForm> {
    const placesService = new google.maps.places.PlacesService(document.createElement('div'))

    const result = await new Promise((resolve: (value: PlaceResult) => void) => {
      placesService.getDetails({ placeId }, (place: PlaceResult | null, status: PlacesServiceStatus) => {
        if (place === null) {
          throw new Error('Place not found')
        }

        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(place)
        }
      })
    })

    return mapPlaceResultToAddress(result)
  }

  onMounted(async () => {
    const key = getGlobalConfig('googleMapsApiKey')

    if (key === null) {
      loader = null

      toast.error({ title: 'Error', description: 'Google Maps API key is not defined' })

      throw new Error('Google Maps API key is not defined. Please define it in the config using the defineConfig function')
    }

    loader = new Loader({
      apiKey: key,
      libraries: [
        'places',
      ],
    })
    await loader.importLibrary('places')
  })

  return {
    getAddressFormByPlaceId,
    fetchPredictions,
  }
}

function getCoordinates(place: PlaceResult): AddressCoordinates {
  if (place?.geometry?.location == null) {
    return {
      latitude: null,
      longitude: null,
    }
  }

  return {
    latitude: place.geometry.location.lat() ?? null,
    longitude: place.geometry.location.lng() ?? null,
  }
}

function mapAutoCompletePredictionToDataItem(prediction: AutoCompletePrediction): DataItem<string> {
  return {
    label: prediction.description,
    value: prediction.place_id,
  }
}

function findAddressComponent(place: PlaceResult, type: AddressComponentType): GeocoderAddressComponent | null {
  return place?.address_components?.find((component) => component.types[0] === type) ?? null
}

function mapPlaceResultToAddress(place: PlaceResult): AddressForm {
  return {
    bus: null,
    city: findAddressComponent(place, 'locality')?.long_name ?? '',
    coordinates: getCoordinates(place),
    country: findAddressComponent(place, 'country')?.short_name ?? '',
    number: findAddressComponent(place, 'street_number')?.long_name ?? '',
    postalCode: findAddressComponent(place, 'postal_code')?.long_name ?? '',
    street: findAddressComponent(place, 'route')?.long_name ?? '',
  }
}

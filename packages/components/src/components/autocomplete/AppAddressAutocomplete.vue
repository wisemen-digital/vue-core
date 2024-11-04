<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { useDebounceFn } from '@vueuse/core'
import {
  computed,
  onMounted,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

import AppAutocomplete from '@/components/autocomplete/AppAutocomplete.vue'
import type { AppAutocompleteProps } from '@/components/autocomplete/autocomplete.props'
import { injectConfigContext } from '@/components/config-provider/config.context'
import { useToast } from '@/composables/index'
import type { Address } from '@/types/addressAutoComplete'
import type { SelectOption } from '@/types/select.type'

type AutocompletePrediction = google.maps.places.AutocompletePrediction
type PlaceId = string
type PlaceResult = google.maps.places.PlaceResult
type AddressComponentType = 'country' | 'locality' | 'postal_code' | 'route' | 'street_number'
type GeocoderAddressComponent = google.maps.GeocoderAddressComponent
interface AddressCoordinates {
  lat: null | number
  lng: null | number
}

interface Place {
  id: PlaceId
  label: string
}

const props = withDefaults(defineProps<Omit<AppAutocompleteProps<Address>, 'displayFn' | 'isLoading' | 'items'> & {
  modelValue: Address | null
}>(), {
  isRequired: false,
  label: null,
})

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: Address]
}>()

const EMPTY_ADDRESS = {
  bus: '',
  city: '',
  coordinates: {
    lat: 0,
    lng: 0,
  },
  country: '',
  postalCode: '',
  street: '',
  streetNumber: '',
} as const

const model = computed<Address | null>({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value ?? EMPTY_ADDRESS)
  },
})

const globalConfigContext = injectConfigContext()

const { t } = useI18n()
const toast = useToast()

const isLoading = ref<boolean>(false)

const selectedPlace = ref<Place | null>(getDefaultPlace())
const predictions = ref<AutocompletePrediction[]>([])

const autocompleteOptions = computed<SelectOption<Place>[]>(() => (
  predictions.value.map((prediction) => ({
    type: 'option',
    value: {
      id: prediction.place_id,
      label: prediction.description,
    },
  }))
))

let autocompleteService: google.maps.places.AutocompleteService | null = null
let loader: Loader | null

const debounceSearch = useDebounceFn(async (value: string) => {
  try {
    predictions.value = await fetchPredictions(value)
  }
  catch {
    toast.error({
      message: t('component.address_autocomplete.failed_to_fetch'),
    })
  }

  isLoading.value = false
}, 300)

async function fetchPredictions(searchTerm: string): Promise<AutocompletePrediction[]> {
  if (searchTerm === null || searchTerm.length < 5 || autocompleteService === null) {
    return []
  }

  try {
    const response = await autocompleteService.getPlacePredictions({
      input: searchTerm,
      types: [
        'address',
      ],
    }, (
      predictions: AutocompletePrediction[] | null,
    ) => {
      return predictions ?? []
    })

    return response.predictions
  }
  catch {
    toast.error({
      message: t('component.address_autocomplete.failed_to_fetch'),
    })
  }

  return []
}

function onSearch(searchTerm: string): void {
  if (searchTerm === null || searchTerm.length < 5) {
    predictions.value = []

    return
  }

  isLoading.value = true
  debounceSearch(searchTerm)
}

function getDefaultPlace(): Place | null {
  if (props.modelValue === null) {
    return null
  }

  return {
    id: '',
    label: formatAddressObjectToString(props.modelValue),
  }
}

function displayFn(place: Place): string {
  if (place === null) {
    return ''
  }

  return place.label
}

async function onUpdateModelValue(place: Place | null): Promise<void> {
  if (place === null) {
    model.value = null

    return
  }

  const address = await getAddressFormByPlaceId(place.id)

  model.value = address
}

async function getAddressFormByPlaceId(placeId: string): Promise<Address> {
  const placesService = new google.maps.places.PlacesService(document.createElement('div'))

  const place = await new Promise((resolve: (value: PlaceResult) => void) => {
    placesService.getDetails({ placeId }, (place, status) => {
      if (place === null) {
        throw new Error('Place not found')
      }

      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(place)
      }
    })
  })

  return {
    bus: '',
    city: findAddressComponent(place, 'locality')?.long_name ?? '',
    coordinates: getCoordinates(place),
    country: findAddressComponent(place, 'country')?.short_name ?? '',
    postalCode: findAddressComponent(place, 'postal_code')?.long_name ?? '',
    street: findAddressComponent(place, 'route')?.long_name ?? '',
    streetNumber: findAddressComponent(place, 'street_number')?.long_name ?? '',
  }
}

function formatAddressObjectToString(address: Address): string {
  return `${address.street} ${address.streetNumber}, ${address.postalCode} ${address.city}, ${address.country.toUpperCase()}`
}

function getCoordinates(place: PlaceResult): AddressCoordinates {
  if (place?.geometry?.location == null) {
    return {
      lat: null,
      lng: null,
    }
  }

  return {
    lat: place.geometry.location.lat() ?? null,
    lng: place.geometry.location.lng() ?? null,
  }
}

function findAddressComponent(place: PlaceResult, type: AddressComponentType): GeocoderAddressComponent | null {
  return place?.address_components?.find((component) => component.types[0] === type) ?? null
}

onMounted(async () => {
  const { googleMapsApiKey } = globalConfigContext

  if (googleMapsApiKey === null) {
    loader = null

    throw new Error('Google Maps API key is not defined. Provide it in the config using the `<AppConfigProvider />` component.')
  }

  loader = new Loader({
    apiKey: googleMapsApiKey,
    libraries: [
      'places',
    ],
  })
  await loader.importLibrary('places')

  autocompleteService = new google.maps.places.AutocompleteService()
})
</script>

<template>
  <AppAutocomplete
    :id="props.id"
    v-model="selectedPlace"
    :items="autocompleteOptions"
    :display-fn="displayFn"
    :label="props.label"
    :is-required="props.isRequired"
    :icon-left="props.iconLeft"
    :icon-right="props.iconRight"
    :is-arrow-visible="props.isArrowVisible"
    :is-disabled="props.isDisabled"
    :collision-padding-in-px="props.collisionPaddingInPx"
    :container-element="props.containerElement"
    :style-config="props.styleConfig"
    :side="props.side"
    :align="props.align"
    :is-loading="isLoading"
    :errors="props.errors"
    :hint="props.hint"
    :is-touched="props.isTouched"
    :test-id="props.testId"
    :offset-in-px="props.offsetInPx"
    :placeholder="props.placeholder"
    :popover-width="props.popoverWidth"
    :should-remain-open-on-value-change="props.shouldRemainOpenOnValueChange"
    autocomplete="off"
    @search="onSearch"
    @blur="emit('blur')"
    @update:model-value="onUpdateModelValue"
  />
</template>

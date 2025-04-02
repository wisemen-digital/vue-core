<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import {
  computed,
  onMounted,
  ref,
} from 'vue'

import type { AddressAutocompleteEmits } from '@/components/address-autocomplete/addressAutocomplete.emits'
import type { AddressAutocompleteProps } from '@/components/address-autocomplete/addressAutocomplete.props'
import type {
  Address,
  FormattedAddress,
} from '@/components/address-autocomplete/addressAutocomplete.type'
import { getAddressByPlaceId } from '@/components/address-autocomplete/addressAutocomplete.util'
import Autocomplete from '@/components/autocomplete/Autocomplete.vue'
import { useInjectConfigContext } from '@/components/config-provider/config.context'
import SelectItem from '@/components/select/parts/SelectItem.vue'

const props = defineProps<AddressAutocompleteProps>()

const emit = defineEmits<AddressAutocompleteEmits>()

const modelValue = defineModel<Address | null>({
  required: true,
})

const { googleMapsApiKey } = useInjectConfigContext()

const isLoading = ref<boolean>(false)
const addressResults = ref<FormattedAddress[]>([])

let autocompleteService: typeof google.maps.places.AutocompleteSuggestion | null = null

const selectedAddress = computed<FormattedAddress | null>({
  get: () => {
    if (modelValue.value === null) {
      return null
    }

    return {
      placeId: '',
      mainText: `${modelValue.value.street} ${modelValue.value.streetNumber}`,
      secondaryText: `${modelValue.value.postalCode} ${modelValue.value.city}`,
    }
  },
  set: async (value) => {
    if (value === null) {
      modelValue.value = null

      return
    }

    modelValue.value = await getAddressByPlaceId(value.placeId)
  },
})

const autocompleteItems = computed<FormattedAddress[]>(() => (
  addressResults.value.map((result) => {
    return {
      placeId: result.placeId,
      mainText: result.mainText,
      secondaryText: result.secondaryText,
    }
  })
))

async function onSearch(searchTerm: string): Promise<void> {
  if (autocompleteService === null) {
    throw new Error('Autocomplete service is not defined')
  }

  isLoading.value = true

  try {
    const results = await autocompleteService.fetchAutocompleteSuggestions({
      input: searchTerm,
    })

    addressResults.value = results.suggestions
      .filter((suggestion) => suggestion.placePrediction !== null)
      .map((suggestion) => {
        const placePrediction = suggestion.placePrediction!

        return {
          placeId: placePrediction.placeId,
          mainText: placePrediction.mainText?.text ?? '',
          secondaryText: placePrediction.secondaryText?.text ?? '',
        }
      })
  }
  catch (error) {
    emit('error', error)
  }

  isLoading.value = false
}

async function createAutocompleteSuggestionService(
  apiKey: string,
): Promise<typeof google.maps.places.AutocompleteSuggestion> {
  const loader = new Loader({
    apiKey,
    libraries: [
      'places',
    ],
  })

  const { AutocompleteSuggestion } = await loader.importLibrary('places')

  return AutocompleteSuggestion
}

onMounted(async () => {
  if (googleMapsApiKey === null) {
    throw new Error('Google Maps API key is not defined. Provide it in the config using the `<ConfigProvider />` component.')
  }

  autocompleteService = await createAutocompleteSuggestionService(googleMapsApiKey)
})
</script>

<template>
  <Autocomplete
    v-bind="props"
    v-model="selectedAddress"
    :items="autocompleteItems"
    :is-loading="isLoading"
    :display-fn="(place) => `${place.mainText}, ${place.secondaryText}`"
    @search="onSearch"
    @focus="emit('focus')"
    @blur="emit('blur')"
  >
    <template #item="{ value }">
      <SelectItem :value="value">
        <div class="overflow-hidden">
          <p class="font-medium truncate">
            {{ value.mainText }}
          </p>

          <p class="line-clamp-2">
            {{ value.secondaryText }}
          </p>
        </div>
      </SelectItem>
    </template>
  </Autocomplete>
</template>

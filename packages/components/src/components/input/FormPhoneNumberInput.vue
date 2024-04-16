<script setup lang="ts">
import type { CountryCode } from 'libphonenumber-js'
import parsePhoneNumber, {
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
} from 'libphonenumber-js'
import examples from 'libphonenumber-js/mobile/examples'
import { vMaska } from 'maska'
import { computed } from 'vue'

import type { Icon } from '../../icons/icons'
import type { FormFieldErrors } from '../../types/formFieldErrors.type'
import FormInput from './FormInput.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors<string>
    /**
     * The right icon of the input.
     * @default null
     */
    iconRight?: Icon | null
    /**
     * Whether the input is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the input is loading.
     * @default false
     */
    isLoading?: boolean
    /**
     *  Whether the input is required.
     */
    isRequired?: boolean
    /**
     * Whether the input is touched.
     */
    isTouched: boolean
    /**
     * The label of the input.
     */
    label: string
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    iconRight: undefined,
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    placeholder: null,
  },
)

const model = defineModel<null | string>({
  required: true,
})

const countries = getCountries()

function getCountryFromPhoneNumber(phoneNumber: string): CountryCode | null {
  const parsedPhoneNumber = parsePhoneNumber(phoneNumber)

  if (phoneNumber.length < 2) {
    return null
  }

  // Loop over first 3 characters of the phone number to find the calling code
  // 3 has priority, but if 3 has no match, then 2, and if 2 has no match, then 1
  let country = null

  for (let i = 3; i > 0; i--) {
    const callingCode = phoneNumber.slice(0, i).replace('+', '')

    country = countries.find(country => getCountryCallingCode(country) === callingCode)

    if (country !== undefined) {
      break
    }
  }

  // Find the country based on the calling code
  // the parsed phone number is preferred because it is more accurate, but it is not always available
  country = parsedPhoneNumber?.country ?? country

  return country ?? null
}

function getExamplePhoneNumberByCountry(countryCode: CountryCode): null | string {
  const exampleNumber = getExampleNumber(countryCode, examples)

  return exampleNumber?.formatInternational() ?? null
}

function getMaskFromExampleNumber(exampleNumber: string): string {
  return exampleNumber
    .replace(/\d/g, '#')
    .replace(/ /g, ' ')
    .replace(/\(/g, '(')
    .replace(/\)/g, ')')
    .replace(/-/g, '-')
}

const mask = computed<null | string>(() => {
  if (model.value === null) {
    return '+####'
  }

  const country = getCountryFromPhoneNumber(model.value)

  if (country === null) {
    return '+####'
  }

  const exampleNumber = getExamplePhoneNumberByCountry(country)

  if (exampleNumber === null) {
    return '+####'
  }

  return getMaskFromExampleNumber(exampleNumber)
})

const countryFlagUrl = computed<null | string>(() => {
  if (model.value === null) {
    return null
  }

  const country = getCountryFromPhoneNumber(model.value)

  if (country === null) {
    return null
  }

  return getCountryFlagUrl(country)
})

function getCountryFlagUrl(countryCode: string): string {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}
</script>

<template>
  <FormInput
    v-maska
    v-model="model"
    :data-maska="mask"
    :errors="props.errors"
    :icon-right="props.iconRight"
    :is-disabled="props.isDisabled"
    :is-loading="props.isLoading"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :label="props.label"
    :placeholder="props.placeholder"
  >
    <template #left>
      <div class="ml-3 h-3 w-5 overflow-hidden rounded-sm">
        <img
          v-if="countryFlagUrl !== null"
          :src="countryFlagUrl"
        >

        <div
          v-else
          class="h-full bg-neutral-200"
        />
      </div>
    </template>

    <template #right>
      <slot name="right" />
    </template>
  </FormInput>
</template>

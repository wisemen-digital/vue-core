<script setup lang="ts">
import type { CountryCode } from 'libphonenumber-js'
import parsePhoneNumber, {
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
} from 'libphonenumber-js'
import examples from 'libphonenumber-js/mobile/examples'
import { vMaska } from 'maska'
import { computed, ref } from 'vue'

import FormElement from '@/components/form-element/FormElement.vue'
import AppInput from '@/components/input/AppInput.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type { SelectItem } from '@/types/selectItem.type'

const props = withDefaults(
  defineProps<{
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
     * The errors associated with the input.
     */
    errors: FormFieldErrors<string>
    /**
     * The right icon of the input.
     * @default null
     */
    iconRight?: Icon | null
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
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    iconRight: undefined,
    placeholder: null,
  },
)

const countries = getCountries()

const model = defineModel<null | string>({
  required: true,
})

const countryCodeModel = ref<CountryCode | null>(getCountryCodeFromPhoneNumber(model.value))

const mask = computed<null | string>(() => {
  if (model.value === null) {
    return '+####'
  }

  const country = getCountryCodeFromPhoneNumber(model.value)

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
  if (countryCodeModel.value === null) {
    return null
  }

  return getCountryFlagUrl(countryCodeModel.value)
})

const countryCodes = computed<SelectItem<CountryCode>[]>(() => {
  return countries.map(country => ({
    label: country,
    type: 'option',
    value: country,
  }))
})

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

function getCountryCodeFromPhoneNumber(phoneNumber: null | string): CountryCode | null {
  if (phoneNumber === null) {
    return null
  }

  const parsedPhoneNumber = parsePhoneNumber(phoneNumber)

  if (phoneNumber.length < 3) {
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

function onCountryCodeSelect(countryCode: CountryCode | null): void {
  if (countryCode === null) {
    return
  }

  model.value = `+${getCountryCallingCode(countryCode)}`
}

function onPhoneNumberUpdate(phoneNumber: null | string): void {
  if ((phoneNumber === '' || phoneNumber === null) && countryCodeModel.value !== null) {
    model.value = `+${getCountryCallingCode(countryCodeModel.value)}`

    return
  }

  const countryCode = getCountryCodeFromPhoneNumber(phoneNumber)

  if (countryCode === null) {
    return
  }

  countryCodeModel.value = countryCode
}

function getCountryFlagUrl(countryCode: CountryCode): string {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <div class="flex items-center">
      <AppSelect
        :id="id"
        v-model="countryCodeModel"
        :is-invalid="isInvalid"
        :items="countryCodes"
        :display-fn="(value: CountryCode) => value"
        :is-disabled="props.isDisabled"
        :is-required="props.isRequired"
        class="w-28"
        select-trigger-class="rounded-r-none"
        @update:model-value="onCountryCodeSelect"
      >
        <template #left>
          <div class="flex items-center pl-3">
            <div class="h-4 w-6 overflow-hidden rounded-sm">
              <img
                v-if="countryFlagUrl !== null"
                :src="countryFlagUrl"
                :alt="`Flag of ${countryCodeModel}`"
              >
              <div
                v-else
                class="size-full bg-neutral-200"
              />
            </div>
          </div>
        </template>
        <template #option="{ value }">
          <div class="flex w-24 items-center gap-2 text-sm">
            <div
              v-if="false"
              class="w-4 overflow-hidden rounded-sm"
            >
              <img
                v-if="getCountryFlagUrl(value)"
                :src="getCountryFlagUrl(value)"
                :alt="`Flag of ${value}`"
              >
            </div>
            <p>
              {{ `${value} (+${getCountryCallingCode(value)})` }}
            </p>
          </div>
        </template>
      </AppSelect>
      <AppInput
        :id="id"
        v-model="model"
        :data-maska="mask"
        :is-invalid="isInvalid"
        :is-disabled="props.isDisabled"
        :is-loading="props.isLoading"
        :is-touched="props.isTouched"
        :placeholder="props.placeholder"
        class="rounded-l-none border-l-0"
        type="tel"
        @update:model-value="onPhoneNumberUpdate"
        v-maska
      />
    </div>
  </FormElement>
</template>

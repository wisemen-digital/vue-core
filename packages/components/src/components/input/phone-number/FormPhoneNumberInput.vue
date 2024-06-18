<script setup lang="ts">
import type {
  CountryCode,
} from 'libphonenumber-js'
import parsePhoneNumber, {
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
} from 'libphonenumber-js'
import examples from 'libphonenumber-js/mobile/examples'
import { vMaska } from 'maska'
import {
  computed,
  ref,
  watch,
} from 'vue'

import FormElement from '@/components/form-element/FormElement.vue'
import AppInput from '@/components/input/AppInput.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppText from '@/components/text/AppText.vue'
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
     * The label of the input.
     */
    label: string
    /**
     * The model value of the input.
     */
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
    placeholder: null,
  },
)

const countries = getCountries()
const model = defineModel<null | string>({
  required: true,
})

const countryCodeModel = ref<CountryCode | null>(getCountryCodeFromPhoneNumber(model.value))
const numberModel = ref<null | string>(getNumberFromModel())

const fullNumber = computed<null | string>(() => {
  if (numberModel.value === null || countryCodeModel.value === null) {
    return null
  }

  const countryCallingCode = getCountryCallingCode(countryCodeModel.value)
  const fullNumber = `+${countryCallingCode}${numberModel.value}`

  return fullNumber.replaceAll(' ', '')
})

watch(
  () => [
    numberModel.value,
    countryCodeModel.value,
  ],
  () => {
    model.value = fullNumber.value
  },
)

function getNumberFromModel(): null | string {
  if (model.value === null || countryCodeModel.value === null) {
    return null
  }

  const getCountryCodeCallingCode = getCountryCallingCode(countryCodeModel.value)

  return model.value.replace(`+${getCountryCodeCallingCode}`, '')
}

const countryCodeDialCodeModel = computed<null | string>(() => {
  if (countryCodeModel.value === null) {
    return null
  }

  return getCountryCallingCode(countryCodeModel.value)
})

const mask = computed<null | string>(() => {
  if (model.value === null) {
    return '###'
  }

  const country = getCountryCodeFromPhoneNumber(model.value)

  if (country === null) {
    return '###'
  }

  const exampleNumber = getExamplePhoneNumberByCountry(country)

  if (exampleNumber === null) {
    return '###'
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
  return countries.map((country) => ({
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
  const dialCode = exampleNumber.match(/\d+/)?.[0]

  return exampleNumber
    .replace(`+${dialCode}`, '')
    .replace(/\d/g, '#')
    .replace(/ /g, ' ')
    .replace(/\(/g, '(')
    .replace(/\)/g, ')')
    .replace(/-/g, '-')
    .trim()
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

    country = countries.find((country) => getCountryCallingCode(country) === callingCode)

    if (country !== undefined) {
      break
    }
  }

  // Find the country based on the calling code
  // the parsed phone number is preferred because it is more accurate, but it is not always available
  country = parsedPhoneNumber?.country ?? country

  return country ?? null
}

function getCountryFlagUrl(countryCode: CountryCode): string {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}

const dialCodeDisplayValue = computed<string>(() => {
  return `+${countryCodeDialCodeModel.value}`
})
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
        :is-value-hidden="true"
        :display-fn="() => ''"
        :is-disabled="props.isDisabled"
        :is-required="props.isRequired"
        class="w-16"
        select-trigger-class="rounded-r-none focus-within:z-[1] relative"
      >
        <template #left>
          <div class="flex items-center pl-3">
            <div class="h-3 w-5 overflow-hidden rounded-sm">
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
        v-model="numberModel"
        :data-maska="mask"
        :is-invalid="isInvalid"
        :is-disabled="props.isDisabled"
        :is-loading="props.isLoading"
        :is-touched="props.isTouched"
        :placeholder="props.placeholder"
        class="w-full rounded-l-none border-l-0"
        type="tel"
        v-maska
      >
        <template #left>
          <AppText
            variant="subtext"
            class="-mr-2 ml-2 text-muted-foreground"
          >
            {{ dialCodeDisplayValue }}
          </AppText>
        </template>
      </AppInput>
    </div>
  </FormElement>
</template>

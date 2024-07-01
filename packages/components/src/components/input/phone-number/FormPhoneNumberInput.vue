<script setup lang="ts">
import i18nCountries from 'i18n-iso-countries'
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
import type { Locale } from 'vue-i18n'

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
     * The locale of the input.
     * For registering locales, see: https://www.npmjs.com/package/i18n-iso-countries
     * @default 'en'
     */
    locale?: Locale | null
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
    /**
     * The tooltip of the input.
     */
    tooltip?: string
  }>(),
  {
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    locale: null,
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

  return parsePhoneNumber(phoneNumber)?.country ?? null
}

function getCountryFlagUrl(countryCode: CountryCode): string {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}

const dialCodeDisplayValue = computed<string>(() => {
  return `+${countryCodeDialCodeModel.value}`
})

function getCountryName(countryCode: CountryCode): null | string {
  if (props.locale === null) {
    return null
  }

  return i18nCountries.getName(countryCode, props.locale, { select: 'official' }) ?? null
}

const countryName = computed<null | string>(() => {
  if (countryCodeModel.value === null) {
    return null
  }

  return getCountryName(countryCodeModel.value) ?? null
})
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :tooltip="props.tooltip"
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
                :alt="`Flag of ${countryName ?? countryCodeModel}`"
              >
              <div
                v-else
                class="size-full bg-neutral-200"
              />
            </div>
          </div>
        </template>

        <template #option="{ value }">
          <div class="flex w-48 items-center gap-2 text-sm">
            <div
              class="w-4 overflow-hidden rounded-sm"
            >
              <img
                v-if="getCountryFlagUrl(value)"
                :src="getCountryFlagUrl(value)"
                :alt="`Flag of ${getCountryName(value) ?? value}`"
              >
            </div>
            <p>
              {{ `${getCountryName(value) ?? value} (+${getCountryCallingCode(value)})` }}
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

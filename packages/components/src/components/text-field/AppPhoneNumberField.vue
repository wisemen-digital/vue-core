<script setup lang="ts">
import i18nCountries from 'i18n-iso-countries'
import type { CountryCode } from 'libphonenumber-js'
import {
  AsYouType,
  formatIncompletePhoneNumber,
  getCountries,
  getCountryCallingCode,
  validatePhoneNumberLength,
} from 'libphonenumber-js'
import {
  computed,
  nextTick,
  ref,
} from 'vue'

import AppSelect from '@/components/select/AppSelect.vue'
import AppTextField from '@/components/text-field/AppTextField.vue'
import type { AppTextFieldProps } from '@/components/text-field/textField.props.js'
import type { SelectItem } from '@/types/select.type.js'

const props = withDefaults(defineProps<Omit<AppTextFieldProps, 'type'>>(), {
  id: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  autoComplete: 'off',
  errors: null,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
})

const model = defineModel<null | string>({
  required: true,
})

// TODO: default value via prop
const countryCode = ref<CountryCode>('BE')
const countries = getCountries()

const countryCodeModel = computed<CountryCode>({
  get: () => {
    return countryCode.value
  },
  set: (value) => {
    if (model.value === null) {
      countryCode.value = value as CountryCode

      return
    }

    const newModel = model.value?.replace(`+${getCountryCallingCode(countryCode.value)}`, `+${getCountryCallingCode(value)}`) ?? null

    if (newModel !== null) {
      model.value = formatIncompletePhoneNumber(newModel, value as CountryCode)
    }

    countryCode.value = value as CountryCode
  },
})

const asYouType = computed<AsYouType>(() => {
  return new AsYouType(countryCode.value)
})

const inputModel = computed<null | string>({
  get: () => {
    if (model.value === null) {
      return null
    }

    const dialCode = getCountryCallingCode(countryCodeModel.value).toString()

    const formattedNumber = formatIncompletePhoneNumber(model.value, countryCodeModel.value)

    return formattedNumber.replace(`+${dialCode}`, '').trim()
  },
  set: (value) => {
    if (value === null) {
      model.value = null

      return
    }

    const phoneNumberValidation = validatePhoneNumberLength(value, countryCode.value)

    if (phoneNumberValidation === 'TOO_LONG') {
      const tempModelValue = structuredClone(model.value)

      model.value = ''

      void nextTick(() => {
        model.value = tempModelValue
      })

      return
    }

    const fullNumber = `+${getCountryCallingCode(countryCodeModel.value)} ${value}`

    asYouType.value.reset()
    asYouType.value.input(fullNumber)

    if (asYouType.value.isValid()) {
      model.value = asYouType.value.getNumber()?.formatInternational() ?? fullNumber
    }

    model.value = fullNumber
  },
})

const countryCodes = computed<SelectItem<CountryCode>[]>(() => countries.map((country) => ({
  label: country,
  type: 'option',
  value: country,
})))

const dialCodeDisplayValue = computed<string>(() => {
  return `+${getCountryCallingCode(countryCodeModel.value)}`
})

function getCountryFlagUrl(countryCode: CountryCode): null | string {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}

function getCountryName(countryCode: CountryCode): null | string {
  // TODO: locale
  return i18nCountries.getName(countryCode, 'en-US', { select: 'official' }) ?? null
}
</script>

<template>
  <AppTextField
    v-bind="props"
    v-model="inputModel"
    :style="{
      '--text-field-padding-left-default': '6px',
    }"
    type="tel"
  >
    <template #left>
      <AppSelect
        v-model="countryCodeModel"
        :items="countryCodes"
        :display-fn="(value) => ''"
        :filter-fn="(option, search) => true"
        :style-class="['phone-number-select']"
        dropdown-align="start"
        dropdown-width="available-width"
        class="w-16 shrink-0"
      >
        <template #value>
          <img
            :src="getCountryFlagUrl(countryCodeModel) ?? undefined"
            :alt="getCountryName(countryCodeModel) ?? undefined"
            class="h-3 w-5 object-contain"
          >
        </template>

        <template #option-content="{ item }">
          <div class="flex items-center gap-x-2">
            <img
              :src="getCountryFlagUrl(item.value) ?? undefined"
              :alt="getCountryName(item.value) ?? undefined"
              class="h-3 w-5 object-contain"
            >

            <span>
              {{ item.value }} (+{{ getCountryCallingCode(item.value) }})
            </span>
          </div>
        </template>
      </AppSelect>

      <span class="ml-1.5 text-text-field-font-size-default text-gray-400">
        {{ dialCodeDisplayValue }}
      </span>
    </template>
  </AppTextField>
</template>

<style>
.phone-number-select {
  --select-dropdown-max-width-default: 200px;
  --select-ring-color-focus: transparent;
  --select-border-top-color-default: transparent;
  --select-border-bottom-color-default: transparent;
  --select-border-left-color-default: transparent;
  --select-border-right-color-default: transparent;
  --select-border-top-color-focus: transparent;
  --select-border-bottom-color-focus: transparent;
  --select-border-left-color-focus: transparent;
  --select-border-right-color-focus: transparent;
  --select-border-top-color-hover: transparent;
  --select-border-bottom-color-hover: transparent;
  --select-border-left-color-hover: transparent;
  --select-border-right-color-hover: transparent;
  --select-bg-color-focus: #f8f8f8;
  --select-bg-color-hover: #f8f8f8;
  --select-caret-color-focus: #909090;
  --select-padding-right-default: 6px;
  --select-border-radius-top-right-default: 0px;
  --select-border-radius-bottom-right-default: 0px;
  --select-dropdown-border-color-default: transparent;
  --select-dropdown-border-color-focus: transparent;
  --select-dropdown-border-color-hover: transparent;
}
</style>

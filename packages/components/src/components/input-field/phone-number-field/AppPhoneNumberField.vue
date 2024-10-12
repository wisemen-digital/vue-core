<script setup lang="ts">
import i18nCountries from 'i18n-iso-countries'
import i18nEn from 'i18n-iso-countries/langs/en.json'
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

import {
  type AppPhoneNumberFieldProps,
  appPhoneNumberFieldPropsDefaultValues,
} from '@/components/input-field/phone-number-field/phoneNumberField.props.js'
import AppTextField from '@/components/input-field/text-field/AppTextField.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import type { SelectItem } from '@/types/select.type.js'

const props = withDefaults(defineProps<AppPhoneNumberFieldProps>(), appPhoneNumberFieldPropsDefaultValues)

i18nCountries.registerLocale(i18nEn)

const model = defineModel<null | string>({
  required: true,
})

const phoneNumberFieldRef = ref<InstanceType<typeof AppTextField> | null>(null)
const phoneNumberFieldWidth = computed<number>(() => phoneNumberFieldRef.value?.$el.clientWidth ?? 0)

const countryCode = ref<CountryCode>(props.defaultCountryCode)
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
  return i18nCountries.getName(countryCode, props.locale, { select: 'official' }) ?? null
}

function filterFn(option: CountryCode, search: string): boolean {
  const countryName = getCountryName(option)

  const countryCallingCode = `+${getCountryCallingCode(option)}`

  return option.toLowerCase().includes(search.toLowerCase())
    || countryName?.toLowerCase().includes(search.toLowerCase())
    || countryCallingCode?.toLowerCase().includes(search.toLowerCase())
}
</script>

<template>
  <AppTextField
    v-bind="props"
    ref="phoneNumberFieldRef"
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
        :filter-fn="filterFn"
        :style-config="{
          '--select-dropdown-max-width-default': `${phoneNumberFieldWidth}px`,
          '--select-ring-color-focus': 'transparent',
          '--select-border-top-color-default': 'transparent',
          '--select-border-bottom-color-default': 'transparent',
          '--select-border-left-color-default': 'transparent',
          '--select-border-right-color-default': 'transparent',
          '--select-border-top-color-focus': 'transparent',
          '--select-border-bottom-color-focus': 'transparent',
          '--select-border-left-color-focus': 'transparent',
          '--select-border-right-color-focus': 'transparent',
          '--select-border-top-color-hover': 'transparent',
          '--select-border-bottom-color-hover': 'transparent',
          '--select-border-left-color-hover': 'transparent',
          '--select-border-right-color-hover': 'transparent',
          '--select-bg-color-focus': 'var(--bg-primary-hover)',
          '--select-bg-color-hover': 'var(--bg-primary-hover)',
          '--select-padding-right-default': 'var(--spacing-md)',
          '--select-border-radius-top-right-default': '0px',
          '--select-border-radius-bottom-right-default': '0px',
          '--select-dropdown-border-color-default': 'transparent',
          '--select-dropdown-min-width-default': '300px',
          '--select-shadow-default': '0 0 0 0 transparent',
          '--select-with-icon-right-padding-right-default': '0',
          '--select-icon-right-spacing-default': 'var(--spacing-sm)',
        }"
        align="start"
        popover-width="available-width"

        class="w-16 shrink-0"
      >
        <template #value>
          <img
            :src="getCountryFlagUrl(countryCodeModel) ?? undefined"
            :alt="getCountryName(countryCodeModel) ?? undefined"
            class="h-3 w-5 shrink-0 rounded-sm object-cover"
          >
        </template>

        <template #option-content="{ item }">
          <div class="flex items-center gap-x-4 overflow-hidden">
            <img
              :src="getCountryFlagUrl(item.value) ?? undefined"
              :alt="getCountryName(item.value) ?? undefined"
              class="h-3 w-5 rounded-sm object-cover"
            >

            <div class="flex w-full items-center overflow-hidden pr-4">
              <span class="block truncate pr-2 leading-5">
                {{ getCountryName(item.value) ?? item.value }}
              </span>

              <span>
                <span class="text-xs text-secondary">
                  (+{{ getCountryCallingCode(item.value) }})
                </span>
              </span>
            </div>
          </div>
        </template>
      </AppSelect>

      <span class="ml-sm text-text-field-font-size-default text-placeholder">
        {{ dialCodeDisplayValue }}
      </span>
    </template>
  </AppTextField>
</template>

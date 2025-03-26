<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
// import i18nCountries from 'i18n-iso-countries'
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
  watch,
} from 'vue'

import type { PhoneNumberFieldProps } from '@/components/phone-number-field/phoneNumberField.props'
import PhoneNumberFieldSelectItem from '@/components/phone-number-field/PhoneNumberFieldSelectItem.vue'
import Select from '@/components/select/Select.vue'
import TextField from '@/components/text-field/TextField.vue'

const props = withDefaults(defineProps<PhoneNumberFieldProps>(), {
  defaultCountryCode: 'BE',
})

// i18nCountries.registerLocale(i18nEn)

const model = defineModel<string | null>({
  default: null,
  // TODO: required
  required: false,
})

const phoneNumberFieldRef = ref<InstanceType<any> | null>(null)
const phoneNumberFieldSize = useElementSize(
  computed<HTMLElement | null>(() => phoneNumberFieldRef.value?.$el ?? null),
)

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

const asYouType = computed<AsYouType>(() => new AsYouType(countryCode.value))

const inputModel = computed<string | null>({
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

const dialCodeDisplayValue = computed<string>(() => `+${getCountryCallingCode(countryCodeModel.value)}`)

function filterFn(option: CountryCode, searchTerm: string): boolean {
  return true
}

// Focus the input when a country code is selected
watch(countryCodeModel, () => {
  if (countryCodeModel.value === null) {
    return
  }

  const input = phoneNumberFieldRef.value.$el.querySelector('input') as HTMLInputElement

  input.focus()
})
</script>

<template>
  <TextField
    ref="phoneNumberFieldRef"
    v-bind="props"
    v-model="inputModel"
    type="tel"
  >
    <template #left>
      <Select
        v-model="countryCodeModel"
        :display-fn="() => ''"
        :filter="{
          isEnabled: true,
        }"
        :virtual-list="{
          isEnabled: true,
          items: countries,
          itemComponent: PhoneNumberFieldSelectItem,
        }"
        :is-disabled="props.isDisabled"
        class="w-16 shrink-0"
        popover-width="available-width"
        popover-align="start"
      />
    </template>
  </TextField>
</template>

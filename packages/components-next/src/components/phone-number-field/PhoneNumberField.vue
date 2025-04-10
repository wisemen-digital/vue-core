<script setup lang="ts">
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

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import {
  getCountryFlagUrl,
  getCountryName,
} from '@/components/phone-number-field/phoneNumber.util'
import type { PhoneNumberFieldProps } from '@/components/phone-number-field/phoneNumberField.props'
import PhoneNumberFieldSelectItem from '@/components/phone-number-field/PhoneNumberFieldSelectItem.vue'
import SelectBaseSingle from '@/components/select/parts/SelectBaseSingle.vue'
import Select from '@/components/select/Select.vue'
import TextField from '@/components/text-field/TextField.vue'

const props = withDefaults(defineProps<PhoneNumberFieldProps>(), { defaultCountryCode: 'BE' })

const model = defineModel<string | null>({ required: true })

const globalConfigContext = useInjectConfigContext()

const phoneNumberFieldRef = ref<InstanceType<any> | null>(null)
const phoneNumberFieldEl = computed<HTMLElement | null>(() => phoneNumberFieldRef.value?.$el ?? null)

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
  const optionName = getCountryName(option, globalConfigContext.locale.value) ?? ''

  return option.toLowerCase().includes(searchTerm.toLowerCase())
    || optionName.toLowerCase().includes(searchTerm.toLowerCase())
}
</script>

<template>
  <TextField
    ref="phoneNumberFieldRef"
    v-bind="props"
    v-model="inputModel"
    :class-config="{
      input: 'pl-sm',
    }"
    type="tel"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <template #left>
      <Select
        v-model="countryCodeModel"
        :popover-anchor-reference-element="phoneNumberFieldEl"
        :display-fn="(countryCode) => countryCode"
        :filter="{
          isEnabled: true,
          fn: filterFn,
        }"
        :virtual-list="{
          isEnabled: true,
          items: countries,
        }"
        :class-config="{
          root: 'h-8 ml-[0.18rem] rounded-xs border-none shadow-none outline-none not-disabled:hover:bg-primary-hover pr-xs focus-within:bg-tertiary',
          iconRight: 'mr-0 size-4',
          baseSingle: 'pr-0',
        }"
        :is-disabled="props.isDisabled"
        class="shrink-0"
        popover-align="start"
      >
        <template #base>
          <SelectBaseSingle>
            <img
              v-if="countryCodeModel !== null"
              :src="getCountryFlagUrl(countryCodeModel) ?? undefined"
              :alt="getCountryName(countryCodeModel, globalConfigContext.locale.value) ?? countryCodeModel"
              class="rounded-xxs block h-3.5 w-5 shrink-0 object-cover"
            >

            <span class="sr-only">
              {{ getCountryName(countryCodeModel, globalConfigContext.locale.value) ?? countryCodeModel }}
            </span>
          </SelectBaseSingle>
        </template>

        <template #virtual-list-item="{ item }">
          <PhoneNumberFieldSelectItem :value="item" />
        </template>
      </Select>

      <span class="text-placeholder pl-xs text-sm">
        {{ dialCodeDisplayValue }}
      </span>
    </template>
  </TextField>
</template>

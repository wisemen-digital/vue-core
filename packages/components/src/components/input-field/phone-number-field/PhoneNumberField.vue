<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
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

import { injectConfigContext } from '@/components/config-provider/config.context'
import type { PhoneNumberFieldProps } from '@/components/input-field/phone-number-field/phoneNumberField.props'
import TextField from '@/components/input-field/text-field/TextField.vue'
import Select from '@/components/select/Select.vue'
import type { SelectItem } from '@/types/select.type'

const props = withDefaults(defineProps<PhoneNumberFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  autoComplete: 'off',
  defaultCountryCode: 'BE',
  errors: () => [],
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  styleConfig: null,
})

defineSlots<{
  /**
   * Can be used to render a custom hint and error message.
   */
  bottom: ({
    errors, hint,
  }: { errors: string[]
    hint: string | null }) => void
  /**
   * Can be used to render a custom error message.
   */
  error: ({ errors }: { errors: string[] }) => void
  /**
   * Can be used to render a custom hint message.
   */
  hint: ({ hint }: { hint: string | null }) => void
  /**
   * Can be used to render a custom label.
   */
  label: ({ label }: { label: string | null }) => void
}>()

const model = defineModel<string | null>({ required: true })

const globalConfigContext = injectConfigContext()

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

const countryCodes = computed<SelectItem<CountryCode>[]>(() => countries.map((country) => ({
  label: country,
  type: 'option',
  value: country,
})))

const dialCodeDisplayValue = computed<string>(() => `+${getCountryCallingCode(countryCodeModel.value)}`)

function getCountryFlagUrl(countryCode: CountryCode): string | null {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}

function getCountryName(countryCode: CountryCode): string | null {
  return new Intl.DisplayNames(globalConfigContext.locale.value, { type: 'region' }).of(countryCode) ?? countryCode
}

function filterFn(option: CountryCode, search: string): boolean {
  const countryName = getCountryName(option)

  const countryCallingCode = `+${getCountryCallingCode(option)}`

  return option.toLowerCase().includes(search.toLowerCase())
    || countryName?.toLowerCase().includes(search.toLowerCase())
    || countryCallingCode?.toLowerCase().includes(search.toLowerCase())
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
    v-bind="props"
    ref="phoneNumberFieldRef"
    v-model="inputModel"
    :style="{
      '--text-field-padding-left-default': '0.375rem',
    }"
    type="tel"
  >
    <template #label="{ label }">
      <slot
        :label="label"
        name="label"
      />
    </template>

    <template #error="{ errors }">
      <slot
        :errors="errors"
        name="error"
      />
    </template>

    <template #hint="{ hint }">
      <slot
        :hint="hint"
        name="hint"
      />
    </template>

    <template #bottom="{ errors, hint }">
      <slot
        :errors="errors"
        :hint="hint"
        name="bottom"
      />
    </template>

    <template #left>
      <Select
        v-model="countryCodeModel"
        :items="countryCodes"
        :display-fn="() => ''"
        :filter-fn="filterFn"
        :virtual-list="{
          optionHeight: 36,
        }"
        :style-config="{
          '--select-dropdown-max-width-default': `${phoneNumberFieldSize.width.value}px`,
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
        :is-disabled="props.isDisabled"
        :is-readonly="props.isReadonly"
        popover-align="start"
        popover-width="available-width"
        class="w-16 shrink-0"
      >
        <template #value="{ value }">
          <img
            :src="getCountryFlagUrl(value) ?? undefined"
            :alt="getCountryName(value) ?? undefined"
            class="rounded-xxs h-3 w-5 shrink-0 object-cover"
          >
        </template>

        <template #option-content="{ item }">
          <div class="flex items-center gap-x-4 overflow-hidden">
            <img
              :src="getCountryFlagUrl(item.value) ?? undefined"
              :alt="getCountryName(item.value) ?? undefined"
              class="rounded-xxs h-3 w-5 object-cover"
            >

            <div class="flex w-full items-center overflow-hidden pr-4">
              <span class="block truncate pr-2 leading-5">
                {{ getCountryName(item.value) ?? item.value }}
              </span>

              <span class="text-secondary translate-y-px text-xs">
                (+{{ getCountryCallingCode(item.value) }})
              </span>
            </div>
          </div>
        </template>
      </Select>

      <span
        class="
          ml-sm text-placeholder
          text-(length:--text-field-font-size-default)
        "
      >
        {{ dialCodeDisplayValue }}
      </span>
    </template>
  </TextField>
</template>

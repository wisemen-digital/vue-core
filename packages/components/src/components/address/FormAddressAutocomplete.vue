<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core'
import {
  computed,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

import FormCombobox from '@/components/combobox/FormCombobox.vue'
import { useAddressAutoComplete } from '@/composables/addressAutocomplete.composable'
import { useLoading } from '@/composables/loading.composable'
import { useToast } from '@/composables/toast.composable'
import type { AddressForm } from '@/types/address.type'
import { EMPTY_ADDRESS_FORM } from '@/types/address.type'
import type { ComboboxItem } from '@/types/comboboxItem.type'
import type { DataItem } from '@/types/dataItem.type'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import { AddressUtil } from '@/utils/address.util'

interface Suggestion {
  placeId: string
  label: string
}

const props = withDefaults(defineProps<{
  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean
  /**
   * Whether the input is required.
   */
  isRequired?: boolean
  /**
   * Whether the input is touched.
   */
  isTouched: boolean
  /**
   * The errors associated with the input.
   */
  errors: FormFieldErrors
  /**
   * The label of the input.
   */
  label: string
  /**
   * The errors associated with the input.
   */
  modelValue: AddressForm | null
  /**
   * The placeholder of the input.
   */
  placeholder?: null | string
}>(), {
  isDisabled: false,
  isRequired: false,
  placeholder: null,
})

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: AddressForm]
}>()

const addressModelValue = computed<AddressForm | null>({
  get: () => props.modelValue ?? null,
  set: (value) => emit('update:modelValue', value ?? EMPTY_ADDRESS_FORM),
})

const { t } = useI18n()
const toast = useToast()
const loadingState = useLoading()
const addressAutoComplete = useAddressAutoComplete()

const value = ref<Suggestion | null>(
  (addressModelValue.value != null)
    ? {
        placeId: '',
        label: AddressUtil.formatAddressForm(addressModelValue.value),
      }
    : null,
)
const isDebouncing = ref<boolean>(false)

const addressPredictions = ref<DataItem<string>[]>([])

const addressPredictionItems = computed<ComboboxItem<Suggestion>[]>(() =>
  addressPredictions.value.map((prediction) => ({
    type: 'option',
    value: {
      placeId: prediction.value,
      label: prediction.label,
    },
  })))

const debounceSearch = useDebounceFn(async (value: string) => {
  try {
    addressPredictions.value = await addressAutoComplete.fetchPredictions(value)
  }
  catch {
    toast.error({
      title: t('error.default_error.title'),
      description: t('error.default_error.description'),
    })
  }

  loadingState.setLoadingState(false)
  isDebouncing.value = false
}, 300)

function onBlur(): void {
  emit('blur')
}

async function onUpdateModelValue(suggestion: Suggestion | null): Promise<void> {
  if (suggestion === null) {
    return
  }

  addressModelValue.value = await addressAutoComplete.getAddressFormByPlaceId(suggestion.placeId)
}

function onUpdateSearch(search: null | string): void {
  if (search === null) {
    return
  }

  isDebouncing.value = true
  void debounceSearch(search)
}
</script>

<template>
  <FormCombobox
    v-model="value"
    :display-fn="(option: Suggestion) => option.label"
    :empty-text="t('shared.no_results_found')"
    :errors="props.errors"
    :filter-fn="(option) => option"
    :has-clear-button="true"
    :is-disabled="props.isDisabled"
    :is-loading="loadingState.isLoading.value || isDebouncing"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :items="addressPredictionItems"
    :label="label"
    :placeholder="placeholder"
    icon-right="search"
    @blur="onBlur"
    @update:model-value="onUpdateModelValue"
    @update:search="onUpdateSearch"
  />
</template>

<style lang="scss" scoped>
.PopoverContent {
  width: var(--radix-popover-trigger-width);
}
</style>

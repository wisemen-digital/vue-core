<script setup lang="ts" generic="T extends string">
import type { DataItem } from '@/types/dataItem.type'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

import AppCombobox from '../combobox/AppCombobox.vue'
import FormInputContainer from '../form-input-container/FormInputContainer.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The text to display when there are no options.
     * @default t('components.combobox.empty')
     */
    emptyText?: null | string
    /**
     * The errors associated with the combobox.
     */
    errors: FormFieldErrors
    /**
     * Whether the combobox is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the select is loading.
     */
    isLoading?: boolean
    /**
     *  Whether the combobox is required.
     */
    isRequired?: boolean
    /**
     * Whether the combobox has been touched (focused and blurred).
     */
    isTouched: boolean
    /**
     * The label of the combobox.
     */
    label: string
    /**
     * The options of the combobox.
     */
    options: DataItem<T>[]
    /**
     * The placeholder of the combobox.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    emptyText: null,
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    placeholder: null,
  },
)

const emit = defineEmits<{
  blur: []
  filter: [value: string]
}>()

const model = defineModel<T | T[] | null>({
  required: true,
})

function onBlur(): void {
  emit('blur')
}

function onFilter(filter: string): void {
  emit('filter', filter)
}
</script>

<template>
  <FormInputContainer
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :placeholder="placeholder"
    :label="props.label"
  >
    <AppCombobox
      :id="id"
      v-model="model"
      :is-invalid="isInvalid"
      :options="props.options"
      :empty-text="props.emptyText"
      :is-disabled="props.isDisabled"
      :is-required="props.isRequired"
      :placeholder="props.placeholder"
      :is-loading="props.isLoading"
      @blur="onBlur"
      @filter="onFilter"
    />
  </FormInputContainer>
</template>

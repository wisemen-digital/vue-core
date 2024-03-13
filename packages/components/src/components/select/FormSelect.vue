<script setup lang="ts" generic="T extends string">
import type { DataItem } from '@/types/dataItem.type'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

import FormInputContainer from '../form-input-container/FormInputContainer.vue'
import AppSelect from '../select/AppSelect.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The errors associated with the select.
     */
    errors: FormFieldErrors
    /**
     *  Whether the select is required.
     */
    isRequired?: boolean
    /**
     * The label of the select.
     */
    label: string
    /**
     * The model value of the select.
     */
    modelValue: T | null
    /**
     * The options of the select.
     */
    options: DataItem<T>[]
    /**
     * The placeholder of the select.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    isRequired: false,
    placeholder: null,
  },
)

const emit = defineEmits<{
  blur: []
}>()

const model = defineModel<T | null>({
  required: true,
})

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <FormInputContainer
    v-slot="{ isInvalid }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="false"
    :placeholder="placeholder"
    :label="props.label"
  >
    <AppSelect
      v-model="model"
      :is-invalid="isInvalid"
      :options="props.options"
      :is-required="props.isRequired"
      :placeholder="props.placeholder"
      @blur="onBlur"
    />
  </FormInputContainer>
</template>

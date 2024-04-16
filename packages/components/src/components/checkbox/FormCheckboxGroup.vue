<script setup lang="ts" generic="T extends string">
import type { DataItem } from '../../types/dataItem.type'
import type { FormFieldErrors } from '../../types/formFieldErrors.type'
import FormElement from '../form-element/FormElement.vue'
import FormCheckbox from './FormCheckbox.vue'

const props = withDefaults(defineProps<{
  /**
   * The errors associated with the checkbox group.
   */
  errors: FormFieldErrors
  /**
   * Whether the checkbox group is disabled.
   */
  isDisabled?: boolean
  /**
   *  Whether the checkbox group is required.
   */
  isRequired?: boolean
  /**
   * Whether the checkbox group has been touched.
   */
  isTouched: boolean
  /**
   * The label of the checkbox group.
   * @default null
   */
  label?: null | string
  /**
   * The options of the checkbox group.
   */
  options: DataItem<T>[]
}>(), {
  isDisabled: false,
  isRequired: false,
  label: null,
})

const model = defineModel<T[]>({
  required: true,
})

function isOptionSelected(value: T) {
  return model.value.includes(value)
}

function toggleOption(value: T) {
  const isSelected = isOptionSelected(value)

  if (isSelected) {
    model.value = model.value.filter(v => v !== value)
  }
  else {
    model.value = [
      ...model.value,
      value,
    ]
  }
}
</script>

<template>
  <FormElement
    :errors="props.errors"
    :is-touched="props.isTouched"
    :label="props.label"
    :is-disabled="props.isDisabled"
    :is-required="props.isRequired"
  >
    <div class="flex flex-col gap-y-2">
      <div
        v-for="option of props.options"
        :key="option.label"
        class="flex items-center gap-x-2"
      >
        <FormCheckbox
          :id="option.value"
          :is-disabled="props.isDisabled"
          :model-value="isOptionSelected(option.value)"
          @update:model-value="toggleOption(option.value)"
        />

        <label :for="option.value">
          {{ option.label }}
        </label>
      </div>
    </div>
  </FormElement>
</template>

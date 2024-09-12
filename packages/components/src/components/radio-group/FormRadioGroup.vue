<script setup lang="ts" generic="T extends string | boolean">
import { computed } from 'vue'

import FormElement from '@/components/form-element/FormElement.vue'
import FormRadioGroupIndicator from '@/components/radio-group/FormRadioGroupIndicator.vue'
import FormRadioGroupItem from '@/components/radio-group/FormRadioGroupItem.vue'
import FormRadioGroupRoot from '@/components/radio-group/FormRadioGroupRoot.vue'
import { useRadioGroupStyle } from '@/components/radio-group/radioGroup.style'
import type { DataItem } from '@/types/dataItem.type'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(defineProps<{
  /**
   * Whether the radio group is disabled.
   */
  isDisabled?: boolean
  /**
   *  Whether the radio group is required.
   */
  isRequired?: boolean
  /**
   * Whether the radio group is touched.
   */
  isTouched: boolean
  /**
   * The errors associated with the radio group.
   */
  errors: FormFieldErrors
  /**
   * The label of the radio group.
   * @default null
   */
  label?: null | string
  /**
   * The model value of the radio group.
   */
  modelValue: T | null
  /**
   * The options of the radio group.
   */
  options: DataItem<T>[]
  /**
   * The tooltip of the input.
   */
  tooltip?: string
}>(), {
  isDisabled: false,
  isRequired: false,
  label: null,
})

const emit = defineEmits<{
  'update:modelValue': [T | null]
}>()

const model = computed<null | string>({
  get: () => props.modelValue !== null ? JSON.stringify(props.modelValue) : null,
  set: (value: null | string) => {
    emit('update:modelValue', value !== null ? JSON.parse(value) as T : null)
  },
})

const options = computed<DataItem<string>[]>(() => {
  return props.options.map((option) => ({
    ...option,
    value: JSON.stringify(option.value),
  }))
})

const radioGroupStyle = useRadioGroupStyle()

const containerClasses = computed<string>(() => radioGroupStyle.container())
const itemIndicatorClasses = computed<string>(() => radioGroupStyle.itemIndicator())
const itemTextClasses = computed<string>(() => radioGroupStyle.itemText())
const itemWrapperClasses = computed<string>(() => radioGroupStyle.itemWrapper())
const itemsContainerClasses = computed<string>(() => radioGroupStyle.itemsContainer())

function removeQuotes(value: string): string {
  return value.replace(/"/g, '')
}
</script>

<template>
  <FormElement
    :errors="props.errors"
    :is-touched="props.isTouched"
    :tooltip="props.tooltip"
    :label="props.label"
    :is-disabled="props.isDisabled"
    :is-required="props.isRequired"
  >
    <FormRadioGroupRoot v-model="model">
      <div :class="containerClasses">
        <div
          v-for="option of options"
          :key="option.label"
          :class="itemsContainerClasses"
        >
          <FormRadioGroupItem
            :id="removeQuotes(option.value)"
            :data-test-id="option.testId"
            :value="option.value"
            :class="itemWrapperClasses"
          >
            <FormRadioGroupIndicator :class="itemIndicatorClasses" />
          </FormRadioGroupItem>

          <label
            :for="removeQuotes(option.value)"
            :class="itemTextClasses"
          >
            {{ option.label }}
          </label>
        </div>
      </div>
    </FormRadioGroupRoot>
  </FormElement>
</template>

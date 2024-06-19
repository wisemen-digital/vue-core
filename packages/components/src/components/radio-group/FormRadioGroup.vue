<script setup lang="ts" generic="T extends string">
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
   * The options of the radio group.
   */
  options: DataItem<T>[]
}>(), {
  isDisabled: false,
  isRequired: false,
  label: null,
})

const model = defineModel<T | null>({
  required: true,
})

const radioGroupStyle = useRadioGroupStyle()

const containerClasses = computed<string>(() => radioGroupStyle.container())
const itemIndicatorClasses = computed<string>(() => radioGroupStyle.itemIndicator())
const itemTextClasses = computed<string>(() => radioGroupStyle.itemText())
const itemWrapperClasses = computed<string>(() => radioGroupStyle.itemWrapper())
const itemsContainerClasses = computed<string>(() => radioGroupStyle.itemsContainer())
</script>

<template>
  <FormElement
    :errors="props.errors"
    :is-touched="props.isTouched"
    :label="props.label"
    :is-disabled="props.isDisabled"
    :is-required="props.isRequired"
  >
    <FormRadioGroupRoot v-model="model">
      <div :class="containerClasses">
        <div
          v-for="option of props.options"
          :key="option.label"
          :class="itemsContainerClasses"
        >
          <FormRadioGroupItem
            :id="option.value"
            :value="option.value"
            :class="itemWrapperClasses"
          >
            <FormRadioGroupIndicator :class="itemIndicatorClasses" />
          </FormRadioGroupItem>

          <label
            :for="option.value"
            :class="itemTextClasses"
          >
            {{ option.label }}
          </label>
        </div>
      </div>
    </FormRadioGroupRoot>
  </FormElement>
</template>

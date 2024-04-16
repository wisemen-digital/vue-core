<script setup lang="ts" generic="T extends string">
import type { DataItem } from '../../types/dataItem.type'
import type { FormFieldErrors } from '../../types/formFieldErrors.type'
import FormElement from '../form-element/FormElement.vue'
import FormRadioGroupIndicator from './FormRadioGroupIndicator.vue'
import FormRadioGroupItem from './FormRadioGroupItem.vue'
import FormRadioGroupRoot from './FormRadioGroupRoot.vue'

const props = withDefaults(defineProps<{
  /**
   * The errors associated with the radio group.
   */
  errors: FormFieldErrors
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
      <div class="flex flex-col gap-y-2">
        <div
          v-for="option of props.options"
          :key="option.label"
          class="flex items-center gap-x-2"
        >
          <FormRadioGroupItem
            :id="option.value"
            :value="option.value"
            class="flex size-5 items-center justify-center gap-x-2 rounded-full border-[1.5px] border-solid border-input-border data-[state=checked]:border-primary"
          >
            <FormRadioGroupIndicator class="block size-2 rounded-full bg-primary" />
          </FormRadioGroupItem>

          <label
            :for="option.value"
            class="text-sm text-secondary-foreground"
          >
            {{ option.label }}
          </label>
        </div>
      </div>
    </FormRadioGroupRoot>
  </FormElement>
</template>

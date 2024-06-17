<script setup lang="ts" generic="T extends string | boolean">
import FormElement from '@/components/form-element/FormElement.vue'
import FormRadioGroupIndicator from '@/components/radio-group/FormRadioGroupIndicator.vue'
import FormRadioGroupItem from '@/components/radio-group/FormRadioGroupItem.vue'
import FormRadioGroupRoot from '@/components/radio-group/FormRadioGroupRoot.vue'
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

const model = defineModel<null | string>({
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
            :value="option.value.toString()"
            class="flex size-5 items-center justify-center gap-x-2 rounded-full border-[1.5px] border-solid border-input-border data-[state=checked]:border-primary"
          >
            <FormRadioGroupIndicator class="block size-2 rounded-full bg-primary" />
          </FormRadioGroupItem>

          <label
            :for="option.value.toString()"
            class="text-sm text-secondary-foreground"
          >
            {{ option.label }}
          </label>
        </div>
      </div>
    </FormRadioGroupRoot>
  </FormElement>
</template>

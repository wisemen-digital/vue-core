<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { Icon } from '../../icons/icons'
import type { FormFieldErrors } from '../../types/formFieldErrors.type'
import type { AcceptableValue, SelectItem } from '../../types/selectItem.type'
import FormElement from '../form-element/FormElement.vue'
import AppSelect from '../select/AppSelect.vue'

const props = withDefaults(
  defineProps<{
    /**
     * display function for the selected value
     */
    displayFn: (value: TValue) => string
    /**
     * The errors associated with the select.
     */
    errors: FormFieldErrors
    /**
     * The icon to display on the left side of the select.
     */
    iconLeft?: Icon
    /**
     * Whether the select is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the select is loading.
     */
    isLoading?: boolean
    /**
     *  Whether the select is required.
     */
    isRequired?: boolean
    /**
     * Whether the select has been touched (focused and blurred).
     */
    isTouched: boolean
    /**
     * The items of the select.
     */
    items: SelectItem<TValue>[]
    /**
     * The label of the select.
     */
    label: string
    /**
     * The placeholder of the select.
     * @default null
     */
    placeholder?: null | string
  }>(),
  { iconLeft: undefined,
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    placeholder: null },
)

const emit = defineEmits<{
  blur: []
}>()

const model = defineModel<TValue | null>({
  required: true,
})

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppSelect
      :id="id"
      v-model="model"
      :is-invalid="isInvalid"
      :items="props.items"
      :icon-left="props.iconLeft"
      :display-fn="props.displayFn"
      :is-disabled="props.isDisabled"
      :is-required="props.isRequired"
      :is-loading="props.isLoading"
      :placeholder="props.placeholder"
      @blur="onBlur"
    >
      <template #left>
        <slot name="left" />
      </template>

      <template #option="{ value }">
        <slot
          :value="value"
          name="option"
        />
      </template>
    </AppSelect>
  </FormElement>
</template>

<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  RadioGroupRoot,
} from 'reka-ui'
import { useId } from 'vue'

import InputField from '@/components/input-field/InputField.vue'
import type { RadioGroupProps } from '@/components/radio-group/radioGroup.props'
import type { FormElementSlots } from '@/types/formElement.type'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
  hint: null,
  label: null,
})

defineSlots<FormElementSlots>()

const model = defineModel<TValue>({
  required: true,
})

const inputId = props.id ?? useId()
</script>

<template>
  <InputField
    :input-id="inputId"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :errors="props.errors"
    :hint="props.hint"
    :label="props.label"
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

    <RadioGroupRoot
      :id="inputId"
      v-model="model"
      :test-id="props.testId"
      :disabled="props.isDisabled"
      :readonly="props.isReadonly"
      :required="props.isRequired"
    >
      <slot />
    </RadioGroupRoot>
  </InputField>
</template>

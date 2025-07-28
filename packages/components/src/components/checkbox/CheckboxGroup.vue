<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import {
  CheckboxGroupRoot,
  useId,
} from 'reka-ui'

import type { CheckboxGroupProps } from '@/components/checkbox/checkboxGroup.props'
import InputField from '@/components/input-field/InputField.vue'
import type { FormElementSlots } from '@/types/formElement.type'

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
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

const model = defineModel<TValue[]>({
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
        :input-id="inputId"
        :is-required="props.isRequired"
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

    <CheckboxGroupRoot v-model="model">
      <slot />
    </CheckboxGroupRoot>
  </InputField>
</template>

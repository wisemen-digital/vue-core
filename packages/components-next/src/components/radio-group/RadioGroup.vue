<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import { useId } from 'vue'

import FormField from '@/components/form-field/FormField.vue'
import RadioGroupRoot from '@/components/radio-group/parts/RadioGroupRoot.vue'
import type { RadioGroupProps } from '@/components/radio-group/radioGroup.props'

const props = defineProps<RadioGroupProps>()

const modelValue = defineModel<AcceptableValue>({
  required: true,
})

const id = props.id ?? useId()
</script>

<template>
  <FormField
    :errors="props.errors"
    :hint="props.hint"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :label="props.label"
    :for="id"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <RadioGroupRoot
      v-bind="props"
      :id="id"
      v-model="modelValue"
    >
      <slot />
    </RadioGroupRoot>
  </FormField>
</template>

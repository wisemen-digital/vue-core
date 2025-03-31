<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import { useId } from 'vue'

import type { CheckboxGroupProps } from '@/components/checkbox-group/checkboxGroup.props'
import CheckboxGroupRoot from '@/components/checkbox-group/parts/CheckboxGroupRoot.vue'
import FormField from '@/components/form-field/FormField.vue'

const props = defineProps<CheckboxGroupProps>()

const modelValue = defineModel<AcceptableValue[]>({
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

    <CheckboxGroupRoot
      v-bind="props"
      :id="id"
      v-model="modelValue"
    >
      <slot />
    </CheckboxGroupRoot>
  </FormField>
</template>

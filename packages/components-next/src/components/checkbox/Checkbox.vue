<script setup lang="ts">
import { useId } from 'vue'

import type { CheckboxEmits } from '@/components/checkbox/checkbox.emits'
import type { CheckboxProps } from '@/components/checkbox/checkbox.props'
import CheckboxIndicator from '@/components/checkbox/parts/CheckboxIndicator.vue'
import CheckboxRoot from '@/components/checkbox/parts/CheckboxRoot.vue'
import FormField from '@/components/form-field/FormField.vue'

const props = defineProps<CheckboxProps>()

const emit = defineEmits<CheckboxEmits>()

const modelValue = defineModel<boolean>({
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
    layout="horizontal"
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

    <CheckboxRoot
      v-bind="props"
      :id="id"
      v-model="modelValue"
      @blur="emit('blur')"
      @focus="emit('focus')"
    >
      <CheckboxIndicator />
    </CheckboxRoot>
  </FormField>
</template>

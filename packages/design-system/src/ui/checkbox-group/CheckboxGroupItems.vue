<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import { CheckboxGroupRoot as RekaCheckboxGroupRoot } from 'reka-ui'

import { useInjectCheckboxGroupContext } from '@/ui/checkbox-group/checkboxGroup.context'

const {
  isDisabled,
  modelValue,
  orientation,
} = useInjectCheckboxGroupContext()
</script>

<template>
  <RekaCheckboxGroupRoot
    v-model="modelValue"
    :orientation="orientation"
    :disabled="isDisabled"
  >
    <slot />
  </RekaCheckboxGroupRoot>
</template>

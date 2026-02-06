<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import { CheckboxGroupRoot as RekaCheckboxGroupRoot } from 'reka-ui'

import { useInjectCheckboxGroupContext } from '@/ui/checkbox-group/checkboxGroup.context'

const {
  modelValue,
} = useInjectCheckboxGroupContext()
</script>

<template>
  <RekaCheckboxGroupRoot
    v-model="modelValue"
  >
    <slot />
  </RekaCheckboxGroupRoot>
</template>

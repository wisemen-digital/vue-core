<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  CheckboxGroupRoot,
} from 'reka-ui'

const model = defineModel<TValue[]>({
  required: true,
})
</script>

<template>
  <CheckboxGroupRoot v-model="model">
    <slot />
  </CheckboxGroupRoot>
</template>

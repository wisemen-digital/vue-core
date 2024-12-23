<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  RadioGroupRoot,
} from 'reka-ui'

const model = defineModel<TValue>({
  required: true,
})
</script>

<template>
  <RadioGroupRoot v-model="model">
    <slot />
  </RadioGroupRoot>
</template>

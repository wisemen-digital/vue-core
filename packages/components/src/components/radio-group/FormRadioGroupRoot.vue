<script setup lang="ts" generic="T extends string">
import { RadioGroupRoot } from 'radix-vue'
import { computed } from 'vue'

const model = defineModel<T | null>({
  required: true,
})

const computedModel = computed<T | undefined>({
  get: () => model.value ?? undefined,
  set: (value: T | undefined) => {
    model.value = value ?? null
  },
})
</script>

<template>
  <RadioGroupRoot v-model="computedModel">
    <slot />
  </RadioGroupRoot>
</template>

<script setup lang="ts" generic="T extends string">
import { RadioGroupRoot } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
}>(), {
  isDisabled: false,
})
const model = defineModel<T | null>({
  required: true,
})

const computedModel = computed<T | undefined>({
  get: () => model.value ?? undefined,
  set: (value: T | undefined) => {
    if (props.isDisabled) {
      return
    }

    model.value = value ?? null
  },
})
</script>

<template>
  <RadioGroupRoot
    v-model="computedModel"
    :disabled="props.isDisabled"
  >
    <slot />
  </RadioGroupRoot>
</template>

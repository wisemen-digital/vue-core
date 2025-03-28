<script setup lang="ts">
import { computed } from 'vue'

import { useInjectSelectContext } from '@/components/select/select.context'

const { modelValue, placeholder } = useInjectSelectContext()

const isPlaceholderVisible = computed<boolean>(() => {
  if (Array.isArray(modelValue.value)) {
    return modelValue.value.length === 0
  }

  return modelValue.value === null
})
</script>

<template>
  <span
    v-if="isPlaceholderVisible"
    class="text-sm text-placeholder"
  >
    {{ placeholder }}
  </span>
</template>

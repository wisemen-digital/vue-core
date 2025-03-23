<script setup lang="ts">
import SelectPlaceholder from '@/packages/@next/select/parts/SelectPlaceholder.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  displayFn,
  modelValue,
} = useInjectSelectContext()
</script>

<template>
  <div class="px-2">
    <SelectPlaceholder />

    <span
      v-if="modelValue !== null"
      class="text-sm text-primary group-data-[is-disabled=true]/select:text-disabled"
    >
      {{ displayFn(modelValue) }}
    </span>
  </div>
</template>

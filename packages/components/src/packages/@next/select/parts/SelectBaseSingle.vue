<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import SelectPlaceholder from '@/packages/@next/select/parts/SelectPlaceholder.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  classConfig,
  customClassConfig,
  displayFn,
  modelValue,
  style,
} = useInjectSelectContext()
</script>

<template>
  <div
    :class="style.baseSingle({
      class: mergeClasses(customClassConfig.baseSingle, classConfig?.baseSingle),
    })"
  >
    <SelectPlaceholder />

    <span
      v-if="modelValue !== null"
      class="text-sm text-primary group-data-[is-disabled=true]/select:text-disabled"
    >
      {{ displayFn(modelValue) }}
    </span>
  </div>
</template>

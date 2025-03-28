<script setup lang="ts">
import SelectPlaceholder from '@/components/select/parts/SelectPlaceholder.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

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

    <slot v-if="modelValue !== null">
      <span class="text-sm text-primary group-data-[is-disabled=true]/select:text-disabled">
        {{ displayFn(modelValue) }}
      </span>

      <slot name="right" />
    </slot>
  </div>
</template>

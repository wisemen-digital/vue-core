<script setup lang="ts">
import { useInjectCheckboxContext } from '@/components/checkbox/checkbox.context'
import CheckboxIndicator from '@/components/checkbox/parts/CheckboxIndicator.vue'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectCheckboxContext()
</script>

<template>
  <div
    :class="style.control({
      class: mergeClasses(classConfig?.control, customClassConfig?.control),
    })"
  >
    <CheckboxIndicator />
  </div>
</template>

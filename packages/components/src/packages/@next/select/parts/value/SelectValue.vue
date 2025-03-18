<script setup lang="ts">
import SelectPopoverTrigger from '@/packages/@next/select/parts/SelectPopoverTrigger.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const { modelValue } = useInjectSelectContext()
</script>

<template>
  <div>
    <span>
      {{ modelValue }}
    </span>

    <SelectPopoverTrigger>
      <button class="absolute inset-0" />
    </SelectPopoverTrigger>
  </div>
</template>

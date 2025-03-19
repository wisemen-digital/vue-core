<script setup lang="ts">
import SelectInlineSearchInput from '@/packages/@next/select/parts/SelectInlineSearchInput.vue'
import SelectPopoverTrigger from '@/packages/@next/select/parts/SelectPopoverTrigger.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  hasInlineSearchInput,
  modelValue,
} = useInjectSelectContext()
</script>

<template>
  <div class="flex items-center size-full">
    <SelectInlineSearchInput v-if="hasInlineSearchInput" />

    <span v-else>
      {{ modelValue }}
    </span>
  </div>

  <SelectPopoverTrigger>
    <button class="absolute inset-0 outline-none" />
  </SelectPopoverTrigger>
</template>

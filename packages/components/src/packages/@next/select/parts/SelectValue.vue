<script setup lang="ts">
import { computed } from 'vue'

import SelectPopoverTrigger from '@/packages/@next/select/parts/SelectPopoverTrigger.vue'
import SelectFilter from '@/packages/@next/select/parts/SelectSearchInput.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const { filter, modelValue } = useInjectSelectContext()

const isInlineFilterVisible = computed<boolean>(
  () => {
    if (filter.value === null) {
      return false
    }

    return filter.value.isEnabled && filter.value.isInline
  },
)
</script>

<template>
  <div class="flex items-center size-full">
    <SelectFilter v-if="isInlineFilterVisible" />

    <span v-else>
      {{ modelValue }}
    </span>
  </div>

  <SelectPopoverTrigger>
    <button class="absolute inset-0" />
  </SelectPopoverTrigger>
</template>

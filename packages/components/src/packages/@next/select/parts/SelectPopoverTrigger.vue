<script setup lang="ts">
import { computed } from 'vue'

import PopoverTrigger from '@/packages/@next/popover/parts/PopoverTrigger.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  filter,
  setIsDropdownVisible,
} = useInjectSelectContext()

const isTriggerFocusable = computed<boolean>(() => {
  if (filter.value === null) {
    return true
  }

  return !filter.value.isEnabled || !filter.value.isInline
})

function openDropdown(): void {
  setIsDropdownVisible(true)
}
</script>

<template>
  <PopoverTrigger
    :tabindex="isTriggerFocusable ? 0 : -1"
    role="combobox"
    @keydown.arrow-down.prevent="openDropdown"
    @keydown.arrow-up.prevent="openDropdown"
  >
    <slot />
  </PopoverTrigger>
</template>

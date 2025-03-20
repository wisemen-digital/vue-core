<script setup lang="ts">
import { computed } from 'vue'

import PopoverTrigger from '@/packages/@next/popover/parts/PopoverTrigger.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'

const {
  isDisabled,
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
  <InteractableElement :is-disabled="isDisabled">
    <PopoverTrigger
      :tabindex="isTriggerFocusable ? 0 : -1"
      :class="{
        'cursor-not-allowed': isDisabled,
      }"
      role="combobox"
      @keydown.arrow-down.prevent="openDropdown"
      @keydown.arrow-up.prevent="openDropdown"
    >
      <slot />
    </PopoverTrigger>
  </InteractableElement>
</template>

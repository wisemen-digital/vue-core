<script setup lang="ts">
import { computed } from 'vue'

import PopoverTrigger from '@/components/popover/parts/PopoverTrigger.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import InteractableElement from '@/components/shared/InteractableElement.vue'

const {
  id,
  isDisabled,
  isDropdownVisible,
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
    <PopoverTrigger>
      <button
        :tabindex="isTriggerFocusable ? 0 : -1"
        :aria-expanded="isDropdownVisible"
        :aria-controls="`${id}-content`"
        :class="{
          'cursor-not-allowed': isDisabled,
        }"
        role="combobox"
        class="absolute inset-0 outline-none"
        @keydown.arrow-down.prevent="openDropdown"
        @keydown.arrow-up.prevent="openDropdown"
      />
    </PopoverTrigger>
  </InteractableElement>
</template>

<script setup lang="ts">
import PopoverTrigger from '@/packages/@next/popover/parts/PopoverTrigger.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const { setIsDropdownVisible } = useInjectSelectContext()

function openDropdown(): void {
  setIsDropdownVisible(true)
}
</script>

<template>
  <PopoverTrigger
    role="combobox"
    @keydown.arrow-down.prevent="openDropdown"
    @keydown.arrow-up.prevent="openDropdown"
  >
    <slot />
  </PopoverTrigger>
</template>

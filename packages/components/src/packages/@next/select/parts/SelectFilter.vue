<script setup lang="ts">
import { ListboxFilter as RekaListboxFilter } from 'reka-ui'

import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  searchTerm,
  setIsDropdownVisible,
} = useInjectSelectContext()

function openDropdown(): void {
  setIsDropdownVisible(true)
}
</script>

<template>
  <RekaListboxFilter
    v-model="searchTerm"
    class="relative bg-primary-hover size-full"
    @input="openDropdown"
  />
</template>

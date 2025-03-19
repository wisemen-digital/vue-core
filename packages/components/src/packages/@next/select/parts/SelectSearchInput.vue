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

// TODO: aria-controls, aria-expanded
</script>

<template>
  <RekaListboxFilter
    v-model="searchTerm"
    class="outline-none bg-transparent text-sm"
    aria-autocomplete="list"
    role="combobox"
    autocomplete="false"
    @input="openDropdown"
    @keydown.up.down.prevent="openDropdown"
  />
</template>

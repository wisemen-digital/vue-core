<script setup lang="ts">
import { ListboxFilter as RekaListboxFilter } from 'reka-ui'

import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const props = withDefaults(defineProps<{
  asChild?: boolean
  placeholder?: string | null
}>(), {
  asChild: false,
  placeholder: null,
})

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
    :placeholder="props.placeholder"
    :as-child="props.asChild"
    class="outline-none bg-transparent text-sm"
    @input="openDropdown"
    @keydown.up.down.prevent="openDropdown"
  >
    <slot />
  </RekaListboxFilter>
</template>

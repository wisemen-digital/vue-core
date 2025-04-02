<script setup lang="ts">
import { ListboxFilter as RekaListboxFilter } from 'reka-ui'

import { useInjectSelectContext } from '@/components/select/select.context'

const props = withDefaults(defineProps<{
  asChild?: boolean
  placeholder?: string | null
}>(), {
  asChild: false,
  placeholder: null,
})

const {
  searchTerm, setIsDropdownVisible,
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
    class="bg-transparent text-sm outline-none"
    @input="openDropdown"
    @keydown.up.down.prevent="openDropdown"
  >
    <slot />
  </RekaListboxFilter>
</template>

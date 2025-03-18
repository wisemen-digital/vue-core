<script setup lang="ts">
import { ListboxFilter as RekaListboxFilter } from 'reka-ui'
import { onMounted, ref } from 'vue'

import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const listboxFilterRef = ref<InstanceType<typeof RekaListboxFilter>>()

const {
  searchInputElementRef,
  searchTerm,
  setIsDropdownVisible,
} = useInjectSelectContext()

function openDropdown(): void {
  setIsDropdownVisible(true)
}

onMounted(() => {
  searchInputElementRef.value = listboxFilterRef.value?.$el ?? null
})
</script>

<template>
  <!-- TODO: aria-controls, aria-expanded -->
  <RekaListboxFilter
    ref="listboxFilterRef"
    v-model="searchTerm"
    class="outline-none bg-transparent text-sm z-10 size-full"
    aria-autocomplete="list"
    role="combobox"
    autocomplete="false"
    @input="openDropdown"
    @keydown.down.prevent="openDropdown"
    @keydown.up.prevent="openDropdown"
  />
</template>

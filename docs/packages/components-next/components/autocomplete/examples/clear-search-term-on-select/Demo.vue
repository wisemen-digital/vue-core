<script setup lang="ts">
import { VcAutocomplete } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
const items = ref<string[]>([])
const isFetchingItems = ref<boolean>(false)

function onSearch(searchTerm: string): void {
  if (searchTerm.length === 0) {
    items.value = []

    return
  }

  isFetchingItems.value = true

  setTimeout(() => {
    items.value = Array.from(Array.from({ length: 10 }), (_, i) => `${searchTerm} ${i + 1}`)

    isFetchingItems.value = false
  }, 200)
}
</script>

<template>
  <VcAutocomplete
    v-model="value"
    :items="items"
    :display-fn="(v) => v"
    :is-loading="isFetchingItems"
    :clear-search-term-on-select="true"
    icon-left="search"
    class="w-72"
    label="Autocomplete"
    @search="onSearch"
  />
</template>

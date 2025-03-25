<script setup lang="ts">
import { ref } from 'vue'

import {
  VcConfigProvider,
  VcThemeProvider,
} from '@/components/index'
import Autocomplete from '@/packages/@next/autocomplete/Autocomplete.vue'
import DialogContainer from '@/packages/@next/dialog/DialogContainer.vue'
import SelectItem from '@/packages/@next/select/parts/SelectItem.vue'
import Select from '@/packages/@next/select/Select.vue'

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
  <VcConfigProvider
    locale="en-NL"
    teleport-target-selector="#test"
  >
    <VcThemeProvider appearance="light">
      <div class="flex items-center justify-center h-screen gap-lg">
        <Autocomplete
          v-if="true"
          :items="items"
          :display-fn="(v) => v"
          :is-loading="isFetchingItems"
          icon-left="search"
          class="w-72"
          label="Autocomplete"
          hint="Type something to search"
          @search="onSearch"
        />

        <Select
          v-if="true"
          :model-value="null"
          :display-fn="(v) => v"
          :filter="{
            isEnabled: true,
            isInline: true,
          }"
          hint="Select an item"
          label="Select"
          class="w-72"
        >
          <SelectItem
            v-for="(item, itemIndex) of ['first', 'second', 'third']"
            :key="itemIndex"
            :value="item"
          >
            {{ item }}
          </SelectItem>
        </Select>
      </div>
      <div id="test" />
      <DialogContainer />
    </VcThemeProvider>
  </VcConfigProvider>
</template>

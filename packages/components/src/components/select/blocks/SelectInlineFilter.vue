<script setup lang="ts">
import { watch } from 'vue'

import { VcTextField } from '@/components/index'
import SelectFilter from '@/components/select/blocks/SelectFilter.vue'
import { injectSelectContext } from '@/components/select/select.context'

const selectContext = injectSelectContext()

function setIsOpen(value: boolean): void {
  selectContext.isOpen.value = value
}

watch(selectContext.modelValue, (value) => {
  selectContext.searchTerm.value = selectContext.displayFn(value)
}, {
  immediate: true,
})
</script>

<template>
  <SelectFilter
    @input="setIsOpen(true)"
    @click="setIsOpen(true)"
  >
    <VcTextField v-model="selectContext.searchTerm.value" />
  </SelectFilter>
</template>

<script setup lang="ts">
import SelectSearchInput from '@/components/select/parts/SelectSearchInput.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import TextField from '@/components/text-field/TextField.vue'

const {
  filter,
  searchInputPlaceholder,
  searchTerm,
} = useInjectSelectContext()
</script>

<template>
  <div
    v-if="filter !== null && filter.isEnabled && !filter.isInline"
    class="p-xs pb-0"
  >
    <SelectSearchInput
      :placeholder="searchInputPlaceholder"
      :as-child="true"
    >
      <TextField
        v-model="searchTerm"
        :class-config="{
          root: 'border-none shadow-none !ring-0 bg-secondary h-8 rounded-sm',
          iconLeft: 'ml-md',
        }"
        icon-left="search"
      />
    </SelectSearchInput>
  </div>
</template>

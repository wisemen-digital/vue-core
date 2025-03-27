<script setup lang="ts">
import SelectSearchInput from '@/components/select/parts/SelectSearchInput.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import TextField from '@/components/text-field/TextField.vue'

const {
  hasScrolledInDropdownContent,
  filter,
  searchInputPlaceholder,
  searchTerm,
} = useInjectSelectContext()
</script>

<template>
  <div
    v-if="filter !== null && filter.isEnabled && !filter.isInline"
    class="relative p-xs pb-0"
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

    <div
      v-if="hasScrolledInDropdownContent"
      class="absolute bottom-0 w-full translate-y-full z-10 h-4 bg-gradient-to-b from-primary to-transparent pointer-events-none"
    />
  </div>
</template>

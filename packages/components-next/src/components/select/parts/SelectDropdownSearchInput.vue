<script setup lang="ts">
import SelectSearchInput from '@/components/select/parts/SelectSearchInput.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import TextField from '@/components/text-field/TextField.vue'

const {
  hasScrolledInDropdownContent,
  classConfig,
  filter,
  searchInputPlaceholder,
  searchTerm,
} = useInjectSelectContext()
</script>

<template>
  <div
    v-if="filter !== null && filter.isEnabled && !filter.isInline"
    class="p-xs relative pb-0"
  >
    <SelectSearchInput
      :placeholder="searchInputPlaceholder"
      :as-child="true"
    >
      <TextField
        v-model="searchTerm"
        :class-config="{
          root: 'border-none shadow-none outline-none bg-secondary h-8 rounded-sm',
          iconLeft: 'ml-md',
          ...classConfig?.dropdownSearchInput,
        }"
        icon-left="search"
      />
    </SelectSearchInput>

    <div
      v-if="hasScrolledInDropdownContent"
      class="
        from-primary pointer-events-none absolute bottom-0 z-10 h-4 w-full
        translate-y-full bg-gradient-to-b to-transparent
      "
    />
  </div>
</template>

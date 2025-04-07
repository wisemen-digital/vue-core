<script setup lang="ts">
import { ListboxFilter as RekaListboxFilter } from 'reka-ui'

import { useInjectSelectContext } from '@/components/select/select.context'
import TextFieldIconLeft from '@/components/text-field/parts/TextFieldIconLeft.vue'
import TextFieldInput from '@/components/text-field/parts/TextFieldInput.vue'
import TextFieldRoot from '@/components/text-field/parts/TextFieldRoot.vue'

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
    <TextFieldRoot
      v-model="searchTerm"
      :placeholder="searchInputPlaceholder"
      :class-config="{
        root: 'border-none shadow-none outline-none bg-secondary h-8 rounded-sm',
        iconLeft: 'ml-md',
        ...classConfig?.dropdownSearchInput,
      }"
    >
      <TextFieldIconLeft />

      <RekaListboxFilter
        :as-child="true"
      >
        <TextFieldInput />
      </RekaListboxFilter>
    </TextFieldRoot>

    <div
      v-if="hasScrolledInDropdownContent"
      class="
        from-primary pointer-events-none absolute bottom-0 z-10 h-4 w-full
        translate-y-full bg-gradient-to-b to-transparent
      "
    />
  </div>
</template>

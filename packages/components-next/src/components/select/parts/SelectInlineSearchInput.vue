<script setup lang="ts">
import { ListboxFilter as RekaListboxFilter } from 'reka-ui'
import {
  onMounted,
  ref,
} from 'vue'

import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

const {
  hasInteractedWithInlineSearchInput,
  isDisabled,
  classConfig,
  customClassConfig,
  inlinesearchInputElementRef,
  placeholder,
  searchInputPlaceholder,
  setIsDropdownVisible,
  style,
} = useInjectSelectContext()

const listboxFilterRef = ref<InstanceType<typeof RekaListboxFilter>>()

function onInput(): void {
  hasInteractedWithInlineSearchInput.value = true
  openDropdown()
}

function openDropdown(): void {
  setIsDropdownVisible(true)
}

onMounted(() => {
  inlinesearchInputElementRef.value = listboxFilterRef.value?.$el ?? null
})
</script>

<template>
  <RekaListboxFilter
    ref="listboxFilterRef"
    :disabled="isDisabled"
    :class="style.inlineSearchInput({
      class: mergeClasses(customClassConfig.inlineSearchInput, classConfig?.inlineSearchInput),
    })"
    :placeholder="placeholder ?? searchInputPlaceholder"
    aria-autocomplete="list"
    role="combobox"
    autocomplete="false"
    @input="onInput"
    @keydown.up.down.prevent="openDropdown"
  />
</template>

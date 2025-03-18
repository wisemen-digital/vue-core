<script setup lang="ts">
import {
  type AcceptableValue,
  ListboxItem as RekaListboxItem,
  type SelectItemSelectEvent,
} from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const props = defineProps<{
  value: AcceptableValue
}>()

const {
  classConfig,
  customClassConfig,
  remainOpenOnValueChange,
  setIsDropdownVisible,
  style,
} = useInjectSelectContext()

function isOptionSelected(e: SelectItemSelectEvent<unknown>): boolean {
  const target = e.target as HTMLElement

  const ariaSelectedAttribute = target.attributes.getNamedItem('aria-selected')

  if (ariaSelectedAttribute === null) {
    return false
  }

  return ariaSelectedAttribute.value === 'true'
}

function onSelect(e: SelectItemSelectEvent<unknown>): void {
  const isAlreadySelected = isOptionSelected(e)

  // By default, when an already selected option is clicked, the dropdown doesn't close
  // This fixes that
  if (isAlreadySelected && !remainOpenOnValueChange.value) {
    setIsDropdownVisible(false)
  }
}
</script>

<template>
  <RekaListboxItem
    :value="props.value"
    :class="style.item({ class: mergeClasses(customClassConfig.item, classConfig?.item) })"
    @select="onSelect"
  >
    <slot />
  </RekaListboxItem>
</template>

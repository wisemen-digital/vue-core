<script setup lang="ts">
import {
  ListboxItem as RekaListboxItem,
  type SelectItemSelectEvent,
} from 'reka-ui'
import {
  onBeforeUnmount,
  onMounted,
  useId,
} from 'vue'

import SelectItemIndicator from '@/components/select/parts/SelectItemIndicator.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import type { SelectItemProps } from '@/components/select/select.props'
import { useInjectSelectGroupContext } from '@/components/select/selectGroup.context'
import { mergeClasses } from '@/customClassVariants'

const props = withDefaults(defineProps<SelectItemProps>(), {
  isDisabled: false,
})

const {
  allGroups,
  allItems,
  classConfig,
  customClassConfig,
  filteredItems,
  remainOpenOnValueChange,
  setIsDropdownVisible,
  style,
  virtualList,
  onSelectItem,
} = useInjectSelectContext()

const selectGroupContext = useInjectSelectGroupContext(null)

const id = useId()

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

  onSelectItem()
}

onMounted(() => {
  allItems.value.set(id, props.value)

  if (selectGroupContext === null) {
    return
  }

  const { id: groupId } = selectGroupContext

  const group = allGroups.value.get(groupId) ?? null

  if (group === null) {
    allGroups.value.set(groupId, new Set([
      id,
    ]))

    return
  }

  group.add(id)
})

onBeforeUnmount(() => {
  allItems.value.delete(id)
})
</script>

<template>
  <RekaListboxItem
    v-if="filteredItems.has(id) || virtualList?.isEnabled"
    :value="props.value"
    :disabled="props.isDisabled"
    :class="style.item({ class: mergeClasses(customClassConfig.item, classConfig?.item) })"
    @select="onSelect"
  >
    <slot />

    <slot name="indicator">
      <SelectItemIndicator />
    </slot>
  </RekaListboxItem>
</template>

<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { ComboboxItem } from '../../types/comboboxItem.type'
import type { AcceptableValue } from '../../types/selectItem.type'
import AppComboboxDivider from './AppComboboxDivider.vue'
import AppComboboxGroup from './AppComboboxGroup.vue'
import AppComboboxOption from './AppComboboxOption.vue'
import AppMultiComboboxOption from './AppMultiComboboxOption.vue'

const props = defineProps<{
  displayFn: (value: TValue) => string
  isMultiple: boolean
  item: ComboboxItem<TValue>
}>()
</script>

<template>
  <AppComboboxDivider v-if="props.item.type === 'divider'" />

  <AppComboboxGroup
    v-else-if="props.item.type === 'group'"
    :label="props.item.label"
  >
    <AppComboboxItem
      v-for="(groupItem, i) of props.item.items"
      :key="i"
      :item="groupItem"
      :is-multiple="props.isMultiple"
      :display-fn="props.displayFn"
    >
      <template #default="{ item: itemValue }">
        <slot :item="itemValue" />
      </template>
    </AppComboboxItem>
  </AppComboboxGroup>

  <AppComboboxOption
    v-else-if="props.item.type === 'option' && !isMultiple"
    :item="props.item"
    :display-fn="props.displayFn"
  >
    <slot :item="props.item" />
  </AppComboboxOption>

  <AppMultiComboboxOption
    v-else-if="props.item.type === 'option' && isMultiple"
    :item="props.item"
    :display-fn="props.displayFn"
  >
    <slot :item="props.item" />
  </AppMultiComboboxOption>
</template>

<script setup lang="ts" generic="TValue extends AcceptableValue">
import AppSelectDivider from '@/components/select/AppSelectDivider.vue'
import AppSelectGroup from '@/components/select/AppSelectGroup.vue'
import AppSelectOption from '@/components/select/AppSelectOption.vue'
import type {
  AcceptableValue,
  SelectItem,
} from '@/types/selectItem.type'

const props = defineProps<{
  /**
   * display function for the selected value
   */
  displayFn: (value: TValue) => null | string
  item: SelectItem<TValue>
}>()
</script>

<template>
  <AppSelectDivider v-if="props.item.type === 'divider'" />

  <AppSelectGroup
    v-else-if="props.item.type === 'group'"
    :label="props.item.label"
  >
    <AppSelectItem
      v-for="(groupItem, i) of props.item.items"
      :key="i"
      :item="groupItem"
      :display-fn="displayFn"
    >
      <!-- @vue-expect-error -->
      <template #default="{ item: itemValue }">
        <slot :item="itemValue" />
      </template>
    </AppSelectItem>
  </AppSelectGroup>

  <AppSelectOption
    v-else-if="props.item.type === 'option'"
    :item="props.item"
    :display-fn="displayFn"
  >
    <slot :item="props.item" />
  </AppSelectOption>
</template>

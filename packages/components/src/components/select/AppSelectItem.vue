<script setup lang="ts" generic="TValue extends SelectValue">
import AppSelectGroup from '@/components/select/AppSelectGroup.vue'
import AppSelectOption from '@/components/select/AppSelectOption.vue'
import AppSelectSeparator from '@/components/select/AppSelectSeparator.vue'
import type { SelectItem, SelectValue } from '@/types/select.type'

const props = defineProps<{
  displayFn: (value: TValue) => string
  item: SelectItem<TValue>
}>()
</script>

<template>
  <AppSelectOption
    v-if="props.item.type === 'option'"
    :item="props.item"
    :display-fn="props.displayFn"
  >
    <template #option-content>
      <slot
        :item="props.item"
        name="option-content"
      />
    </template>

    <template #option-indicator>
      <slot
        :item="props.item"
        name="option-indicator"
      />
    </template>
  </AppSelectOption>

  <slot
    v-else-if="props.item.type === 'separator'"
    name="separator"
  >
    <AppSelectSeparator />
  </slot>

  <AppSelectGroup
    v-else-if="props.item.type === 'group'"
    :item="props.item"
  >
    <template #group-label>
      <slot
        :label="props.item.label"
        name="group-label"
      />
    </template>

    <AppSelectItem
      v-for="(groupItem, i) of props.item.items"
      :key="i"
      :item="groupItem"
      :display-fn="displayFn"
    >
      <!-- @vue-expect-error -->
      <template #option-content="{ item: itemValue }">
        <slot
          :item="itemValue"
          name="option-content"
        />
      </template>

      <!-- @vue-expect-error -->
      <template #option-indicator="{ item: itemValue }">
        <slot
          :item="itemValue"
          name="option-indicator"
        />
      </template>
    </AppSelectItem>
  </AppSelectGroup>
</template>

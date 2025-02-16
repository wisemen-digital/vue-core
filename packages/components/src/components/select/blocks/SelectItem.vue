<script setup lang="ts" generic="TValue extends SelectValue">
import SelectGroup from '@/components/select/blocks/items/SelectGroup.vue'
import SelectOption from '@/components/select/blocks/items/SelectOption.vue'
import SelectSeparator from '@/components/select/blocks/items/SelectSeparator.vue'
import type { SelectItem, SelectValue } from '@/types/select.type'

const props = defineProps<{
  item: SelectItem<TValue extends Array<infer U> ? U : TValue>
}>()
</script>

<template>
  <SelectOption
    v-if="props.item.type === 'option'"
    :item="props.item"
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

    <template #option="{ isSelected }">
      <slot
        :item="props.item"
        :is-selected="isSelected"
        name="option"
      />
    </template>
  </SelectOption>

  <slot
    v-else-if="props.item.type === 'separator'"
    name="separator"
  >
    <SelectSeparator />
  </slot>

  <SelectGroup
    v-else-if="props.item.type === 'group'"
    :item="props.item"
  >
    <template #group-label>
      <slot
        :label="props.item.label"
        name="group-label"
      />
    </template>

    <SelectItem
      v-for="(groupItem, i) of props.item.items"
      :key="i"
      :item="groupItem"
    >
      <template #option-content>
        <slot
          :item="groupItem"
          name="option-content"
        />
      </template>

      <template #option-indicator>
        <slot
          :item="groupItem"
          name="option-indicator"
        />
      </template>

      <template #option>
        <slot
          :item="groupItem"
          name="option"
        />
      </template>
    </SelectItem>
  </SelectGroup>
</template>

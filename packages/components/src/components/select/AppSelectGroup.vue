<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ListboxGroup as RekaListboxGroup,
  ListboxGroupLabel,
} from 'reka-ui'
import { computed } from 'vue'

import { selectStyle } from '@/components/select/select.style'
import type { SelectGroup, SelectValue } from '@/types/select.type'

const props = defineProps<{
  item: SelectGroup<TValue>
}>()

const style = selectStyle()

const groupClasses = computed<string>(() => style.group())
const groupLabelClasses = computed<string>(() => style.groupLabel())
</script>

<template>
  <RekaListboxGroup :class="groupClasses">
    <ListboxGroupLabel :class="groupLabelClasses">
      <slot name="group-label">
        {{ props.item.label }}
      </slot>
    </ListboxGroupLabel>

    <slot />
  </RekaListboxGroup>
</template>

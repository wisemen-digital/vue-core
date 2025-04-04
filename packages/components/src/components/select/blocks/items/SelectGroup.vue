<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ListboxGroup,
  ListboxGroupLabel,
} from 'reka-ui'
import { computed } from 'vue'

import { useSelectStyle } from '@/components/select/select.style'
import type {
  SelectGroup,
  SelectValue,
} from '@/types/select.type'

const props = defineProps<{
  item: SelectGroup<TValue>
}>()

const selectStyle = useSelectStyle()

const groupLabelClasses = computed<string>(() => selectStyle.groupLabel())
const groupContentClasses = computed<string>(() => selectStyle.groupContent())
</script>

<template>
  <ListboxGroup>
    <ListboxGroupLabel :class="groupLabelClasses">
      <slot name="group-label">
        {{ props.item.label }}
      </slot>
    </ListboxGroupLabel>

    <div :class="groupContentClasses">
      <slot />
    </div>
  </ListboxGroup>
</template>

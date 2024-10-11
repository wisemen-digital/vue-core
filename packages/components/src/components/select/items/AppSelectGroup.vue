<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ListboxGroup,
  ListboxGroupLabel,
} from 'reka-ui'
import { computed } from 'vue'

import { selectStyle } from '@/components/select/select.style.js'
import type { SelectGroup, SelectValue } from '@/types/select.type.js'

const props = defineProps<{
  item: SelectGroup<TValue>
}>()

const style = selectStyle()

const groupLabelClasses = computed<string>(() => style.groupLabel())
const groupContentClasses = computed<string>(() => style.groupContent())
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

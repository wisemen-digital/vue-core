<script setup lang="ts" generic="TValue extends SelectValue">
import { SelectGroup as RadixSelectGroup, SelectLabel } from 'radix-vue'
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
  <RadixSelectGroup :class="groupClasses">
    <SelectLabel :class="groupLabelClasses">
      <slot name="group-label">
        {{ props.item.label }}
      </slot>
    </SelectLabel>

    <slot />
  </RadixSelectGroup>
</template>

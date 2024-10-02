<script setup lang="ts" generic="TValue extends SelectValue">
import {
  SelectItem as RadixSelectItem,
  SelectItemIndicator,
  SelectItemText,
} from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { selectItemStyle } from '@/components/select/selectItem.style'
import type {
  SelectOption,
  SelectValue,
} from '@/types/select.type'

const props = defineProps<{
  displayFn: (value: TValue) => string
  item: SelectOption<TValue>
}>()

const stringifiedValue = computed<string>(() => JSON.stringify(props.item.value))

const style = selectItemStyle()

const itemClasses = computed<string>(() => style.item())
const indicatorClasses = computed<string>(() => style.indicator())
</script>

<template>
  <RadixSelectItem
    :value="stringifiedValue"
    :class="itemClasses"
    :disabled="props.item.isDisabled"
  >
    <SelectItemText>
      <slot name="option-content">
        {{ props.displayFn(props.item.value) }}
      </slot>
    </SelectItemText>

    <SelectItemIndicator>
      <slot name="option-indicator">
        <AppIcon
          :class="indicatorClasses"
          icon="checkmark"
        />
      </slot>
    </SelectItemIndicator>
  </RadixSelectItem>
</template>

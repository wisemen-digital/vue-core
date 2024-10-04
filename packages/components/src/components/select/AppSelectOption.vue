<script setup lang="ts" generic="TValue extends SelectValue">
import {
  ListboxItem as RekaListboxItem,
  ListboxItemIndicator,
} from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { useInjectSelectContext } from '@/components/select/select.context.js'
import type { SelectDisplayFn } from '@/components/select/select.props.js'
import { selectItemStyle } from '@/components/select/selectItem.style'
import type {
  SelectOption,
  SelectValue,
} from '@/types/select.type'

const props = defineProps<{
  displayFn: SelectDisplayFn<TValue>
  item: SelectOption<TValue extends Array<infer U> ? U : TValue>
}>()

const { isMultiple } = useInjectSelectContext()

const style = selectItemStyle()

const itemClasses = computed<string>(() => style.item())
const singleValueIndicatorClasses = computed<string>(() => style.singleValueIndicator())
const multipleValueIndicatorClasses = computed<string>(() => style.multipleValueIndicator())
</script>

<template>
  <RekaListboxItem
    :value="props.item.value"
    :class="itemClasses"
    :disabled="props.item.isDisabled"
  >
    <span>
      <slot name="option-content">
        {{ props.displayFn(props.item.value) }}
      </slot>
    </span>

    <div
      v-if="isMultiple"
      :class="multipleValueIndicatorClasses"
    >
      <ListboxItemIndicator :as-child="true">
        <slot name="option-indicator">
          <AppIcon
            icon="checkmark"
            class="w-4/5"
          />
        </slot>
      </ListboxItemIndicator>
    </div>

    <div v-else>
      <ListboxItemIndicator>
        <slot name="option-indicator">
          <AppIcon
            :class="singleValueIndicatorClasses"
            icon="checkmark"
          />
        </slot>
      </ListboxItemIndicator>
    </div>

    <div v-if="false">
      <div
        v-if="isMultiple"
        :class="multipleValueIndicatorClasses"
        class="
          h-select-item-multiple-value-indicator-size-default
          w-select-item-multiple-value-indicator-size-default
          rounded-select-item-multiple-value-indicator-border-radius-default
          border
          border-solid
          border-select-item-multiple-value-indicator-border-color-hover
          duration-100
          group-hover:border-select-item-multiple-value-indicator-border-color-hover"
      />

      <ListboxItemIndicator>
        <slot name="option-indicator">
          <div
            v-if="isMultiple"
            :class="multipleValueIndicatorClasses"
          />

          <AppIcon
            v-else
            :class="singleValueIndicatorClasses"
            icon="checkmark"
          />
        </slot>
      </ListboxItemIndicator>
    </div>
  </RekaListboxItem>
</template>

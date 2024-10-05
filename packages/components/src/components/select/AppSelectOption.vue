<script setup lang="ts" generic="TValue extends SelectValue">
import {
  injectListboxRootContext,
  ListboxItem as RekaListboxItem,
  ListboxItemIndicator,
} from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
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

const rootContext = injectListboxRootContext()

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
      v-if="rootContext.multiple.value"
      :class="multipleValueIndicatorClasses"
    >
      <ListboxItemIndicator :as-child="true">
        <slot name="option-indicator">
          <AppIcon
            icon="check"
            class="w-4/5"
          />
        </slot>
      </ListboxItemIndicator>
    </div>

    <ListboxItemIndicator v-else>
      <slot name="option-indicator">
        <AppIcon
          :class="singleValueIndicatorClasses"
          icon="check"
        />
      </slot>
    </ListboxItemIndicator>
  </RekaListboxItem>
</template>

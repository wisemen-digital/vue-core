<script setup lang="ts" generic="TValue extends SelectValue">
import {
  injectListboxRootContext,
  ListboxItem,
} from 'reka-ui'
import { computed, useAttrs } from 'vue'

import AppSelectOptionIndicator from '@/components/select/items/AppSelectOptionIndicator.vue'
import { injectSelectContext } from '@/components/select/select.context.js'
import { selectStyle } from '@/components/select/select.style.js'
import { provideSelectOptionContext } from '@/components/select/selectOption.context.js'
import type { SelectOption, SelectValue } from '@/types/select.type.js'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<{
  item: SelectOption<TValue extends Array<infer U> ? U : TValue>
  styleConfig?: StyleConfig<'selectOption'> | null
}>(), {
  styleConfig: null,
})

const attrs = useAttrs()

const style = selectStyle()

const selectContext = injectSelectContext()
const listboxRootContext = injectListboxRootContext()

const optionClasses = computed<string>(() => style.option())

const isSelected = computed<boolean>(() => {
  if (listboxRootContext.multiple.value) {
    return (listboxRootContext.modelValue.value as Array<TValue>).some(
      (value) => JSON.stringify(value) === JSON.stringify(props.item.value),
    )
  }

  return JSON.stringify(listboxRootContext.modelValue.value) === JSON.stringify(props.item.value)
})

const displayValue = computed<string>(() => selectContext.displayFn(props.item.value))

provideSelectOptionContext({
  isSelected,
})
</script>

<template>
  <slot
    :is-selected="isSelected"
    name="option"
  >
    <ListboxItem
      v-bind="attrs"
      :class="optionClasses"
      :value="props.item.value"
      :disabled="props.item.isDisabled"
      :style="props.styleConfig"
    >
      <span class="w-full">
        <slot name="option-content">
          {{ displayValue }}
        </slot>
      </span>

      <AppSelectOptionIndicator>
        <slot name="option-indicator" />
      </AppSelectOptionIndicator>
    </ListboxItem>
  </slot>
</template>

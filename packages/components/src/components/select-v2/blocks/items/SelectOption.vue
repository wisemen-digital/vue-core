<script setup lang="ts" generic="TValue extends SelectValue">
import { ListboxItem } from 'reka-ui'
import {
  computed,
  ref,
  useAttrs,
} from 'vue'

import SelectOptionIndicator from '@/components/select-v2/blocks/items/SelectOptionIndicator.vue'
import { injectSelectContext } from '@/components/select-v2/select.context'
import { useSelectStyle } from '@/components/select-v2/select.style'
import { provideSelectOptionContext } from '@/components/select-v2/selectOption.context'
import { useElementAttributeObserver } from '@/composables/element-attribute-observer/elementAttributeObserver.composable'
import type { SelectOption, SelectValue } from '@/types/select.type'
import type { StyleConfig } from '@/types/style.type'

const props = withDefaults(defineProps<{
  item: SelectOption<TValue extends Array<infer U> ? U : TValue>
  styleConfig?: StyleConfig<'selectOption'> | null
}>(), {
  styleConfig: null,
})

const selectContext = injectSelectContext()
const attrs = useAttrs()
const selectStyle = useSelectStyle()

const listboxItemRef = ref<InstanceType<any> | null>(null)

const optionClasses = computed<string>(() => selectStyle.option())
const isSelected = ref<boolean>(false)

useElementAttributeObserver({
  attribute: 'aria-selected',
  element: computed<HTMLElement | null>(() => listboxItemRef.value?.$el ?? null),
  onChange: (value) => {
    isSelected.value = value === 'true'
  },
})

const displayValue = computed<string>(() => selectContext.displayFn(props.item.value))

// We need to manually close the dropdown when the already selected option is clicked
function onSelect(): void {
  if (isSelected.value && !selectContext.shouldRemainOpenOnValueChange.value) {
    selectContext.isOpen.value = false
  }
}

provideSelectOptionContext({
  isSelected: computed<boolean>(() => isSelected.value),
})
</script>

<template>
  <slot
    :is-selected="isSelected"
    name="option"
  >
    <ListboxItem
      ref="listboxItemRef"
      v-bind="attrs"
      :class="optionClasses"
      :value="props.item.value"
      :disabled="props.item.isDisabled"
      :style="props.styleConfig"
      :data-test-id="props.item.testId"
      @select="onSelect"
    >
      <span class="w-full">
        <slot name="option-content">
          {{ displayValue }}
        </slot>
      </span>

      <SelectOptionIndicator>
        <slot name="option-indicator" />
      </SelectOptionIndicator>
    </ListboxItem>
  </slot>
</template>

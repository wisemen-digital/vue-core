<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  SelectItem as RadixSelectItem,
  SelectItemIndicator,
} from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { useSelectStyle } from '@/components/select/select.style'
import AppText from '@/components/text/AppText.vue'
import type {
  AcceptableValue,
  SelectItemOption,
} from '@/types/selectItem.type'

const props = defineProps<{
  displayFn: (value: TValue) => null | string
  item: SelectItemOption<TValue>
}>()

const value = computed<string>(() => JSON.stringify(props.item.value))

const selectStyle = useSelectStyle()

const optionContainerClasses = computed<string>(() => selectStyle.optionContainer())
const optionIndicatorClasses = computed<string>(() => selectStyle.optionIndicator())
const optionIndicatorContainerClasses = computed<string>(() => selectStyle.optionIndicatorContainer())
const optionWrapperClasses = computed<string>(() => selectStyle.optionWrapper())
</script>

<template>
  <RadixSelectItem
    :disabled="props.item.isDisabled === true"
    :value="value"
    :class="optionContainerClasses"
  >
    <div :class="optionWrapperClasses">
      <slot>
        <AppText variant="subtext">
          {{ displayFn((item as SelectItemOption<TValue>).value) }}
        </AppText>
      </slot>

      <div :class="optionIndicatorContainerClasses">
        <SelectItemIndicator>
          <AppIcon
            :class="optionIndicatorClasses"
            icon="checkmark"
            size="default"
          />
        </SelectItemIndicator>
      </div>
    </div>
  </RadixSelectItem>
</template>

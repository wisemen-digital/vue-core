<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  ComboboxItem as RadixComboboxItem,
  ComboboxItemIndicator,
} from 'radix-vue'
import { computed } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import type { ComboboxItemOption } from '@/types/comboboxItem.type'
import type { AcceptableValue } from '@/types/selectItem.type'

const props = defineProps<{
  displayFn: (value: TValue) => string
  item: ComboboxItemOption<TValue>
}>()

const comboboxStyle = useComboboxStyle()

const optionContainerClasses = computed<string>(() => comboboxStyle.optionContainer())
const optionIndicatorContainerClasses = computed<string>(() => comboboxStyle.optionIndicatorContainer())
const optionIndicatorClasses = computed<string>(() => comboboxStyle.optionIndicator())
const optionSpacerClasses = computed<string>(() => comboboxStyle.optionSpacer())
</script>

<template>
  <RadixComboboxItem
    :disabled="props.item.isDisabled === true"
    :value="props.item.value"
    :class="optionContainerClasses"
  >
    <div :class="optionSpacerClasses">
      <slot>
        <AppText variant="subtext">
          {{ props.displayFn(props.item.value) }}
        </AppText>
      </slot>

      <div :class="optionIndicatorContainerClasses">
        <ComboboxItemIndicator>
          <AppIcon
            :class="optionIndicatorClasses"
            icon="checkmark"
            size="default"
          />
        </ComboboxItemIndicator>
      </div>
    </div>
  </RadixComboboxItem>
</template>

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

const containerClasses = computed<string>(() => comboboxStyle.multiOptionContainer())
const indicatorContainerClasses = computed<string>(() => comboboxStyle.multiOptionIndicatorContainer())
const optionSpacer = computed<string>(() => comboboxStyle.multiOptionSpacer())
const indicatorClasses = computed<string>(() => comboboxStyle.multiOptionIndicator())
</script>

<template>
  <RadixComboboxItem
    :disabled="props.item.isDisabled === true"
    :value="props.item.value"
    :class="containerClasses"
  >
    <div :class="optionSpacer">
      <div :class="indicatorContainerClasses">
        <ComboboxItemIndicator>
          <AppIcon
            :class="indicatorClasses"
            icon="checkmark"
            size="sm"
          />
        </ComboboxItemIndicator>
      </div>

      <slot>
        <AppText variant="subtext">
          {{ props.displayFn(props.item.value) }}
        </AppText>
      </slot>
    </div>
  </RadixComboboxItem>
</template>

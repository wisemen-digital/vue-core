<script setup lang="ts" generic="TValue extends AcceptableValue">
import { ComboboxItem as RadixComboboxItem, ComboboxItemIndicator } from 'radix-vue'

import type { ComboboxItemOption } from '../../types/comboboxItem.type'
import type { AcceptableValue } from '../../types/selectItem.type'
import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  displayFn: (value: TValue) => string
  item: ComboboxItemOption<TValue>
}>()
</script>

<template>
  <RadixComboboxItem
    :disabled="props.item.isDisabled === true"
    :value="props.item.value"
    class="cursor-default rounded-md px-3 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[highlighted]:bg-muted-background data-[disabled]:opacity-50"
  >
    <div class="flex items-center justify-between gap-x-3">
      <slot>
        <AppText variant="subtext">
          {{ props.displayFn(props.item.value) }}
        </AppText>
      </slot>

      <div class="w-4">
        <ComboboxItemIndicator>
          <AppIcon
            icon="checkmark"
            size="default"
            class="text-muted-foreground"
          />
        </ComboboxItemIndicator>
      </div>
    </div>
  </RadixComboboxItem>
</template>

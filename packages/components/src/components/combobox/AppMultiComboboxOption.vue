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
    class="group cursor-default rounded-md px-3 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[highlighted]:bg-muted-background data-[disabled]:opacity-50"
  >
    <div class="flex items-center gap-x-3">
      <div class="flex size-4 items-center justify-center rounded border border-solid border-transparent duration-100 group-data-[highlighted]:border-input-border group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary">
        <ComboboxItemIndicator>
          <AppIcon
            class="text-primary-foreground"
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

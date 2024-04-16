<script setup lang="ts" generic="TValue extends AcceptableValue">
import { SelectItem as RadixSelectItem, SelectItemIndicator } from 'radix-vue'
import { computed } from 'vue'

import type { AcceptableValue, SelectItemOption } from '../../types/selectItem.type'
import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  displayFn: (value: TValue) => null | string
  item: SelectItemOption<TValue>
}>()

const value = computed<string>(() => JSON.stringify(props.item.value))
</script>

<template>
  <RadixSelectItem
    :disabled="props.item.isDisabled === true"
    :value="value"
    class="cursor-default rounded-md px-3 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[disabled]:opacity-50"
  >
    <div class="flex items-center justify-between gap-x-3">
      <slot>
        <AppText variant="subtext">
          {{ displayFn((item as SelectItemOption<TValue>).value) }}
        </AppText>
      </slot>

      <div class="w-4">
        <SelectItemIndicator>
          <AppIcon
            icon="checkmark"
            size="default"
            class="text-muted-foreground"
          />
        </SelectItemIndicator>
      </div>
    </div>
  </RadixSelectItem>
</template>

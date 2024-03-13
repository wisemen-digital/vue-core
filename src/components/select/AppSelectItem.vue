<script setup lang="ts">
import { SelectItem, SelectItemIndicator } from 'radix-vue'

import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = withDefaults(
  defineProps<{
    isDisabled?: boolean
    value: string
  }>(),
  {
    isDisabled: false,
  },
)
</script>

<template>
  <SelectItem
    :disabled="isDisabled"
    :value="props.value"
    class="cursor-default rounded-md px-2 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[disabled]:opacity-50"
  >
    <div class="flex items-center gap-x-3">
      <div class="w-4">
        <SelectItemIndicator>
          <AppIcon
            class="text-muted-foreground"
            icon="checkmark"
            size="default"
          />
        </SelectItemIndicator>
      </div>

      <AppText variant="subtext">
        <slot />
      </AppText>
    </div>
  </SelectItem>
</template>

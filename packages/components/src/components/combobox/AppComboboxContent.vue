<script setup lang="ts">
import { ComboboxContent } from 'radix-vue'

import type { ComboboxProps } from '@/types/comboboxProps.type'

const props = defineProps<{
  popoverProps: ComboboxProps['popoverProps']
}>()
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <ComboboxContent
    :force-mount="true"
    :align="props.popoverProps?.align ?? 'center'"
    :style="{
      minWidth: props.popoverProps?.minWidth,
    }"
    class="combobox-content popover-content relative z-popover max-h-[--radix-combobox-content-available-height] w-[--radix-combobox-trigger-width] min-w-min overflow-hidden rounded-popover border border-solid border-border bg-background shadow-popover-shadow"
    position="popper"
  >
    <slot />
  </ComboboxContent>
</template>

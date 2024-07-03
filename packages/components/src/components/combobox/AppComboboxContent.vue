<script setup lang="ts">
import { ComboboxContent } from 'radix-vue'
import { computed } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'
import type { ComboboxProps } from '@/types/comboboxProps.type'

const props = defineProps<{
  popoverProps: ComboboxProps['popoverProps']
}>()

const comboboxStyle = useComboboxStyle()
const contentStyle = computed<string>(() => comboboxStyle.content())
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <ComboboxContent
    :force-mount="true"
    :align="props.popoverProps?.align ?? 'center'"
    :style="{
      minWidth: props.popoverProps?.minWidth,
    }"
    :class="contentStyle"
    position="popper"
  >
    <slot />
  </ComboboxContent>
</template>

<script setup lang="ts">
import { ComboboxViewport } from 'radix-vue'
import { computed } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'

const comboboxStyle = useComboboxStyle()
const viewportClasses = computed<string>(() => comboboxStyle.viewport())
</script>

<template>
  <ComboboxViewport :class="viewportClasses">
    <slot />
  </ComboboxViewport>
</template>

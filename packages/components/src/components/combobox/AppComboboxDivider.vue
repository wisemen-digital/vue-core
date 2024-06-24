<script setup lang="ts">
import { ComboboxSeparator } from 'radix-vue'
import { computed } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'

const comboboxStyle = useComboboxStyle()
const dividerStyle = computed<string>(() => comboboxStyle.divider())
</script>

<template>
  <ComboboxSeparator :class="dividerStyle" />
</template>

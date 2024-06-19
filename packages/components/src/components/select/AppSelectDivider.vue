<script setup lang="ts">
import { SelectSeparator } from 'radix-vue'
import { computed } from 'vue'

import { useSelectStyle } from '@/components/select/select.style'

const selectStyle = useSelectStyle()

const dividerClasses = computed<string>(() => selectStyle.divider())
</script>

<template>
  <SelectSeparator :class="dividerClasses" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useTableStyle } from '@/components/table/table.style'
import AppText from '@/components/text/AppText.vue'

const tableStyle = useTableStyle()

const textCellClasses = computed<string>(() => tableStyle.cell())
</script>

<template>
  <AppText
    :class="textCellClasses"
    variant="subtext"
  >
    <slot />
  </AppText>
</template>

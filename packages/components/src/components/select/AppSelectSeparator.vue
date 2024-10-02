<script setup lang="ts">
import { SelectSeparator } from 'radix-vue'
import { computed } from 'vue'

import { selectStyle } from '@/components/select/select.style.js'

const style = selectStyle()
const separatorClasses = computed<string>(() => style.separator())
</script>

<template>
  <SelectSeparator :class="separatorClasses" />
</template>

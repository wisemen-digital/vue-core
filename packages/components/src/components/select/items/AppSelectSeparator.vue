<script setup lang="ts">
import { computed } from 'vue'

import { selectStyle } from '@/components/select/select.style.js'

const style = selectStyle()

const separatorClasses = computed<string>(() => style.separator())
</script>

<template>
  <div
    :class="separatorClasses"
    role="separator"
  />
</template>

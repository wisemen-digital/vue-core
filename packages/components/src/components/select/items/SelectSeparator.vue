<script setup lang="ts">
import { computed } from 'vue'

import { useSelectStyle } from '@/components/select/select.style'

const selectStyle = useSelectStyle()

const separatorClasses = computed<string>(() => selectStyle.separator())
</script>

<template>
  <div
    :class="separatorClasses"
    role="separator"
  />
</template>

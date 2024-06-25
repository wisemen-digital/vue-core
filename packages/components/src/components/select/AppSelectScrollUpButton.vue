<script setup lang="ts">
import { SelectScrollUpButton } from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { useSelectStyle } from '@/components/select/select.style'

const selectStyle = useSelectStyle()

const scrollButtonUpClasses = computed<string>(() => selectStyle.scrollButtonUp())
const scrollButtonIconClasses = computed<string>(() => selectStyle.scrollButtonIcon())
</script>

<template>
  <SelectScrollUpButton
    :class="scrollButtonUpClasses"
  >
    <AppIcon
      :class="scrollButtonIconClasses"
      icon="chevronUp"
      size="default"
    />
  </SelectScrollUpButton>
</template>

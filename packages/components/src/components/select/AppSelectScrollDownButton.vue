<script setup lang="ts">
import { SelectScrollDownButton } from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { useSelectStyle } from '@/components/select/select.style'

const selectStyle = useSelectStyle()

const scrollButtonDownClasses = computed<string>(() => selectStyle.scrollButtonDown())
const scrollButtonIconClasses = computed<string>(() => selectStyle.scrollButtonIcon())
</script>

<template>
  <SelectScrollDownButton
    :class="scrollButtonDownClasses"
  >
    <AppIcon
      :class="scrollButtonIconClasses"
      icon="chevronDown"
      size="default"
    />
  </SelectScrollDownButton>
</template>

<script setup lang="ts">
import { SelectContent, SelectViewport } from 'radix-vue'
import { computed } from 'vue'

import AppSelectScrollDownButton from '@/components/select/AppSelectScrollDownButton.vue'
import AppSelectScrollUpButton from '@/components/select/AppSelectScrollUpButton.vue'
import { useSelectStyle } from '@/components/select/select.style'

const selectStyle = useSelectStyle()

const contentContainerClasses = computed<string>(() => selectStyle.contentContainer())
const contentViewportClasses = computed<string>(() => selectStyle.contentViewport())
</script>

<template>
  <SelectContent
    :force-mount="true"
    :class="contentContainerClasses"
    align="center"
    position="popper"
  >
    <AppSelectScrollUpButton />

    <SelectViewport :class="contentViewportClasses">
      <slot />
    </SelectViewport>

    <AppSelectScrollDownButton />
  </SelectContent>
</template>

<style>
.custom-select-content {
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
}
</style>

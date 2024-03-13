<script setup lang="ts">
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'

import AppText from '@/components/text/AppText.vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <ComboboxGroup>
    <ComboboxLabel class="px-2 py-1">
      <AppText variant="subtext">
        {{ props.label }}
      </AppText>
    </ComboboxLabel>

    <slot />
  </ComboboxGroup>
</template>

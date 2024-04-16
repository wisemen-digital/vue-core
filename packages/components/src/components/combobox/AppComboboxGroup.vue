<script setup lang="ts">
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'

import AppText from '../text/AppText.vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <ComboboxGroup>
    <ComboboxLabel class="px-2 py-1">
      <AppText
        variant="caption"
        class="text-secondary-foreground"
      >
        {{ props.label }}
      </AppText>
    </ComboboxLabel>

    <div class="pl-2">
      <slot />
    </div>
  </ComboboxGroup>
</template>
